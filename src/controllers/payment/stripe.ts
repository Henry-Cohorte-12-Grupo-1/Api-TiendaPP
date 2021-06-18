import express from "express";

async function stripeController(req: express.Request, res: express.Response){
  return res.send("stripe :D")
}


export default stripeController;