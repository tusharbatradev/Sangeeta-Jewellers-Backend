const crypto = require('crypto')

const secretKey = crypto.randomBytes(10).toString('hex')
module.exports = secretKey


