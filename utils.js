require("dotenv").config();

const crypto = require('crypto')

const secretKey = process.env.SECRET_KEY;
module.exports = secretKey


