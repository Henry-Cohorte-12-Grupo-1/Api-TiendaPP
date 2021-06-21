import express from "express";
import deleteCart from "./helpers/delete"
import order from "./helpers/order"
import stock from "./helpers/stock"

async function postPayController(req: express.Request, res: express.Response) {
    return res.send("postpay :D")
}


export default postPayController;