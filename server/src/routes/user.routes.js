import express from 'express'
import UserController from '../controllers/UserContoller'

const api = express.Router()

api.post('/sign-up', UserController.signUp)

module.exports = api