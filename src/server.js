import Koa from 'koa'
import serve from 'koa-static'
import http from 'http'
import socket from 'socket.io'

const port = 4000
const app = new Koa()
const server = http.Server(app.callback())
const io = socket(server)

app.use(serve('src/ui/public'))

io.on('connection', socket => {
  let userName = 'anonymous'

  socket.on('register', name => {
    userName = name
    io.emit('userEnter', userName)
    console.log(`Usuário ${userName} registrado.`)
  })

  socket.on('message', message => {
    io.emit('message', { userName, message })
    console.log(`${userName}: ${message}`)
  })

  console.log('A user connected...')
})

server.listen(port, () => console.log(`Server started on port ${port}.`))
