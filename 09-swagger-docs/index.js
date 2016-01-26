'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-body')
const send = require('koa-send')
const cors = require('koa-cors')

const app = new Koa()
const router = new Router()

const inMemoryAppleTree = []

router.get('/docs', function * () {
  yield send(this, './swagger.yaml')
})
router.get('/apples', function * () {
  this.body = inMemoryAppleTree
})

router.post('/apples', function * () {
  const apple = this.request.body
  inMemoryAppleTree.push(apple)
  console.log(apple)
  this.body = apple
  this.status = 201
})

app.use(cors())
app.use(bodyParser())
app.use(router.middleware())

app.listen(3000, err => {
  if (err) {
    throw err
  }
  console.log('listening on port: ' + 3000)
})
