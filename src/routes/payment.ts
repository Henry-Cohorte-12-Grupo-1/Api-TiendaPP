import { Router } from "express";
import * as stripe from "../controllers/payment/stripe";
import paypalController from "../controllers/payment/paypal";
import mercadoController from "../controllers/payment/mercado";
import postPayController from "../controllers/payment/post-pay";

const payment = Router();

payment.get("/stripe", stripe.getController);
payment.post("/stripe", stripe.payController);
payment.use("/paypal", paypalController);
payment.use("/mercado", mercadoController);
payment.use("/post-pay", postPayController);

export default payment;
