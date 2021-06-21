import express from "express";
const products = require("../../data/products");

function productsController(req: express.Request, res: express.Response) {
  //productos de prueba

  return res.send(products);
}

export default productsController;
