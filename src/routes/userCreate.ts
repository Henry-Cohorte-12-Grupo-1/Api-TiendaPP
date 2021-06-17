import { Router } from 'express'
import userCreate from '../controllers/user/userCreate'

const home = Router()

home.post('/', userCreate)
//Probando si se mete esto en el branch del grupo 1
export default home;