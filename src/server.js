import Koa from 'koa'
import serve from 'koa-static'

(async () => {
  const port = 4000
  const app = new Koa()

  app.use(serve('public'))

  app.listen({ port }, () => console.log(`Server started on port ${port}.`))
})()
