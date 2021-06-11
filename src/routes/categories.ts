import { Router } from 'express'
import categoriesController from '../controllers/products/categories'

const categories = Router()

categories.get('/', categoriesController)



export default categories;