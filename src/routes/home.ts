import { Router } from 'express'
import homeController from '../controllers/home/home'
import productsController from '../controllers/home/products'

const home = Router()

home.use('/products', productsController)

home.use('/', homeController)
//Probando si se mete esto en el branch del grupo 1

export default home;