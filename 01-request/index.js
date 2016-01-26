'use strict'

const request = require('superagent')

request
  .get('https://google.com')
  .end((err, res) => {
    if (err) {
      throw err
    }

    console.log(res.text)
  })
