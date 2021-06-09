import express from "express";

async function searchController(req: express.Request, res: express.Response) {
  const product = req.query.product;
  if (Object.keys(req.query).length !== 0 ) { // Checkea si hay query o no.
      console.log("query", req.query)
    if (product) { //Checkea si hay product.
      return res.send(`Buscaste: ${product}`);
    } else { //Si existe query pero esta mal solicitada, enviá bad request
      return res.status(400).send(`Bad request: ${req.query[0]}`);
    }
  }
  return res.send("main route")
}

export default searchController;
