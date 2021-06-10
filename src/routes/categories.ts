import { Router } from 'express'
import categoriesController from '../controllers/products/categories'

const categories = Router()

categories.use('/', categoriesController)

export default categories;