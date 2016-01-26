'use strict'

const logger = require('winston')
const uuid = require('node-uuid')

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', function * () {
  logger.info(`called / ${this.logBeacon}`)
  this.body = {
    message: 'hi'
  }
})

app.use(function * (next) {
  var logBeacon = this.headers['request-id']
  if (!logBeacon) {
    logBeacon = uuid.v1()
  }

  this.logBeacon = logBeacon

  yield next

  this.set('Request-Id', this.logBeacon)
})

app.use(router.middleware())

app.listen(3000, err => {
  if (err) {
    throw err
  }

  console.log('listening on ' + 3000)
})
