import Koa from 'koa'
import serve from 'koa-static'
import http from 'http'
import socket from 'socket.io'

const port = 4000
const app = new Koa()
const server = http.Server(app.callback())
const io = socket(server)
let connectedUsers = {}

app.use(serve('src/ui/public'))

io.on('connection', socket => {
  console.log('Nova conexão. Aguardando registro...')

  socket.on('register', (username, callback) => {
    const nameIsValid = connectedUsers[username] == undefined
      && username.length != 0

    callback({
      auth: nameIsValid,
      error: nameIsValid ? '' : 'Nome de usuário inválido ou em uso.',
    })
    if (!nameIsValid) { return }

    connectedUsers[username] = true
    io.emit('userEnter', username)
    console.log(`Registrado: ${username}`)

    socket.on('message', message => {
      io.emit('message', { username, message })
      console.log(`Mensagem de ${username}: ${message}`)
    })

    socket.on('disconnect', () => {
      delete connectedUsers[username]
      io.emit('userLeave', username)
      console.log(`Desconectado: ${username}`)
    })
  })
})

server.listen(port, () => console.log(`Servidor iniciado na porta ${port}.`))
