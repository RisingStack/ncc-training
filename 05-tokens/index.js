'use strict'

const jwt = require('jsonwebtoken')
const secret = 'secret'

const token = jwt.sign({ id: 12 }, secret)

console.log('token is: ', token)

const decoded = jwt.verify(token, secret)

console.log('decoded is:', decoded)
