import { Router } from 'express'
import productsController from '../controllers/products/products'
import categoriesController from '../controllers/products/categories'

const products = Router()

products.use('/', productsController)


export default products;