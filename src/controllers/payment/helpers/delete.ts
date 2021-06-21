import express from "express";
import db from '../../../models'


// { userId: numero,
//   items: [] }

async function deleteCart(req: express.Request, res: express.Response) {
    return console.log("estoy en deleteCart")

}


export default deleteCart;