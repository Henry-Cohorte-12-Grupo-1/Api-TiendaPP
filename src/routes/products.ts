import { Router } from 'express'
import productsController from '../controllers/products/products'

const products = Router()

products.use('/', productsController)

export default products;