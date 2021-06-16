import { Router } from 'express'
import ordersController from '../controllers/orders/orders'


const orders = Router()

orders.use('/:userId', ordersController)

export default orders;