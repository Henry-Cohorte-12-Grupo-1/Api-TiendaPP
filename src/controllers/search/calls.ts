import db from "../../models";
import { Sequelize } from "sequelize";

//import { products } from "../../seeders/product";

//const { Op } = require("sequelize");

export async function dbProductRequest(
  itemNumber: string,
  pag: string,
  tag: string,
  order: string,
  name = ""
) {
  let items = parseInt(itemNumber, 10);
  let pags = parseInt(pag, 10);
  name = name.toLowerCase();
  try {
    const products = await db.Product.findAndCountAll({
      //attributes: ["name", "flagImg", "continent", "idName", "area"],
      limit: items,
      offset: items * pags,
      order: [[tag, order]],
      where: {
        name: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("name")),
          "LIKE",
          "%" + name + "%"
        ),
      },
    });
    return products;
  } catch (error: any) {
    console.log("caught", error.message);
  }
}