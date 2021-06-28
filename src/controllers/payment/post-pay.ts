import express from "express";
import deleteCart from "./helpers/delete"
import order from "./helpers/order"
import stock from "./helpers/stock";
//import stock from "./helpers/stock"
//import mailer from "./helpers/mailer"
//import { payController } fromn "./stripe";

async function postPayController(req: express.Request, res: express.Response) {
    const { userId, quantity, items, productId, isBuyNow } = req.body
    if (!isBuyNow) {
        deleteCart(userId)
    }
    order(items, userId)
    stock(items)
    //console.log(req.body)
    return res.send("postpay :D")
}


export default postPayController;