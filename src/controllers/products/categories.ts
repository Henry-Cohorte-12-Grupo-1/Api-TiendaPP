import express from "express";
import db from "../../models";
const categories = require("../../data/categories");

async function categoriesController(
  req: express.Request,
  res: express.Response
) {
  //categorias de prueba
  try {
    let resp = await db.Category.findAll();
    return res.send(resp);
  } catch (error: any) {
    console.log("caught", error.message);
  }
}

export default categoriesController;
