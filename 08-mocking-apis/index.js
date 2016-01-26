'use strict'

const nock = require('nock')
const request = require('superagent')
const assert = require('assert')

describe('Mocking apis', () => {
  it('should return fake data', (done) => {
    const response = {
      name: 'Joe',
      email: 'joey@gmail.com'
    }

    nock('http://google.com')
      .get('/')
      .reply(200, response)

    request
      .get('http://google.com')
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        assert.deepEqual(res.body, response)
        done()
      })
  })
})
