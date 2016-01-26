'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

const router = new Router()

router.get('/', function * (next) {
  this.body = {
    message: 'Hello service'
  }
})

app.use(router.middleware())

app.listen(3000, err => {
  if (err) {
    throw err
  }
  console.log(`listening on port: ${3000}`)
})
