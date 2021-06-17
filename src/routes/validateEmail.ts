import { Router } from 'express'
import validateAccount from '../controllers/mailer/validateAccount'

const validateEmail = Router()

validateEmail.use('/', validateAccount)

export default validateEmail;


