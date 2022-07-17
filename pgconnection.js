const dotenv = require('dotenv')
dotenv.config()
const { Pool } = require('pg')
const pool = new Pool({
    database: process.env.NAME_DB || 'api',
    user: process.env.USER_DB || 'me',
    password: process.env.PASS_DB || 'lolkekcheburek',
    host: process.env.HOST_DB || 'localhost',
    port: process.env.PORT_DB || '5000',
})

module.exports = pool