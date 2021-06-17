import express from "express";
import { dbProductRequest } from "./calls";
import {addImages} from "./helpers/addImages"
async function searchController(req: express.Request, res: express.Response) {
  //Paginado
  const ITEMS: any = req.query.items || "10";
  const PAG: any = req.query.pag || "0";
  const TAG: any = req.query.tag || "name";
  const ORDER: any = req.query.order || "ASC";
  //Autocomplete
  const NAME: any = req.query.name;
  //
  if (Object.keys(req.query).length !== 0) {
    // Checkea si hay query o no.
    if (NAME || ITEMS || PAG || TAG || ORDER) {
      //Checkea si hay nombre de producto.
      const products = await dbProductRequest(ITEMS, PAG, TAG, ORDER, NAME);
      //Creo array de promesas
      const productsArray=products.rows; 
      //agrego imágenes
      products.rows = await addImages(productsArray);
      let items = parseInt(ITEMS, 10);
      const pages = Math.ceil(products.count / items);
      return res.status(200).send({ products: products.rows, pages });
    } else {
      //Si existe query pero esta mal solicitada, enviá bad request
      return res.status(400).send(`Bad request`);
    }
  }
  return res.send("main route");
}

export default searchController;
