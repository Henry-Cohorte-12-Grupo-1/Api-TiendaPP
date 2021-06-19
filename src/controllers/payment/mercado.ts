import express from "express";

async function mercadoController(req: express.Request, res: express.Response){
  return res.send("mercado :D")
}


export default mercadoController;