import express from "express";

async function paypalController(req: express.Request, res: express.Response){
  return res.send("paypal :D")
}


export default paypalController;