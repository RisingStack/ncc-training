'use strict'

const urlParams = '/?user=123'

function sign (params) {
  const result = new Buffer(params)
          .toString('base64')
  return `${params}&signature=${result}`
}
console.log('singed url: ', sign(urlParams))
const signedUrl = sign(urlParams)

// Server
const substring = signedUrl.substring(0, signedUrl.indexOf('signature') - 1)

function verify (signature) {
  const signatureData = Buffer(substring).toString('UTF8')
  return urlParams === signatureData
}

console.log('verified: ', verify(substring))
