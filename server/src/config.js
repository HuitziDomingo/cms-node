import { config as dotenv } from 'dotenv'

dotenv()

const API_VERSION = process.env.V1
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME
const PORT = process.env.PORT

    module.exports = {
        API_VERSION,
        DB_USER,
        DB_PASS,
        DB_NAME, PORT
    }