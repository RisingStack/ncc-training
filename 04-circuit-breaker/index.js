'use strict'

const levee = require('levee')
const request = require('superagent')
const range = require('lodash/range')
const map = require('lodash/map')

const opts = {
  maxFailures: 2,
  timeout: 60000,
  resetTimeout: 30000
}
const circuit = levee.createBreaker(request.get, opts)
circuit.fallback = levee.createBreaker((url, callback) => {
  callback(null, 'Unavailable')
}, opts)

Promise.all(map(range(1, 10), runCircuit))
  .then(() => {
    console.log('finished')
  })
  .catch(() => {
    console.log('finshed with error')
  })

function runCircuit () {
  return new Promise((resolve, reject) => {
    circuit.run('http://www.google.com', (err, res) => {
      if (err) {
        return console.log('err', err)
      }
      console.log(res)
    })
  })
}
