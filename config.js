const path = require('path')

const APP_PORT = 8080
const BASE_URL = '/'

const ENV = process.env.NODE_ENV || 'development'

const SRC = path.join(__dirname, 'src')
const DEST = path.join(__dirname, 'build')

module.exports = {
  APP_PORT,
  BASE_URL,
  ENV,
  SRC,
  DEST,
}
