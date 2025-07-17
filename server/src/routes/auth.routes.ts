import express from 'express'
import authController from '../controllers/authController'
let authroutes = express.Router()
authroutes.get('/login',
  authController.userLogin
)
export default authroutes