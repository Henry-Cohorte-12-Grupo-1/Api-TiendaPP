import { Router } from 'express'
import stripeController from '../controllers/payment/stripe'
import paypalController from '../controllers/payment/paypal'
import mercadoController from '../controllers/payment/mercado'

const payment = Router()

payment.use('/stripe', stripeController);
payment.use("/paypal", paypalController);
payment.use("/mercado", mercadoController);

export default payment;