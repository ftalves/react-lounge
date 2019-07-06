import Koa from 'koa'
import serve from 'koa-static'
import http from 'http'
import socket from 'socket.io'

(async () => {
  const port = 4000
  const app = new Koa()
  const server = http.createServer(app.callback())
  const io = socket(server)

  app.use(serve('src/ui/public'))

  io.on('connection', () => {
    console.log('a user connected')
  })

  server.listen(port, () => console.log(`Server started on port ${port}.`))
})()
