import { Router } from 'express'
import homeController from '../controllers/home/home'

const home = Router()

home.use('/', homeController)

export default home;