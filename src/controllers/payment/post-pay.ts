import express from "express";
import deleteCart from "./helpers/delete"
import order from "./helpers/order"
import stock from "./helpers/stock"
import mailer from "./helpers/mailer"
import { payController } from "./stripe";

async function postPayController(req: express.Request, res: express.Response) {
    const { userId, items } = req.body
    deleteCart(userId)
    order(items, userId)
    console.log(req.body)
    return res.send("postpay :D")
}


export default postPayController;