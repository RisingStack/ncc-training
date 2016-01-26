'use strict'

const nock = require('nock')
const request = require('superagent')

describe(() => {
  it((done) => {
    nock('http://localhost:3000')
      .get('/users/1')
      .reply(200, {
        name: 'Joe',
        email: 'joey@gmail.com'
      })

    request
      .get('http://localhost:3000')
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        console.log(res)
        done()
      })
  })
})
