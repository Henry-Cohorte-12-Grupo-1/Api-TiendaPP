import db from "../../models";
import { Sequelize } from "sequelize";

//const { Op } = require("sequelize");

export async function dbProductRequest(
  itemNumber: string,
  pag: string,
  tag: string,
  order: string,
  name: string,
  username: string
) {
  let items = parseInt(itemNumber, 10);
  let pags = parseInt(pag, 10);
  let userId: string = "";
  name = name.toLowerCase();
  try {
    if (username && username !== "") {
      const userSearch = await db.User.findOne({
        where: {
          username: username,
        },
      });
      userId = userSearch.userId;
      const products = await db.Product.findAndCountAll({
        limit: items,
        offset: items * pags,
        order: [[tag, order]],
        where: {
          userId: userId,
          name: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("name")),
            "LIKE",
            "%" + name + "%"
          ),
        },
      });
      return products;
    } else {
      const products = await db.Product.findAndCountAll({
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
    }
  } catch (error: any) {
    console.log("caught", error.message);
  }
}

export async function dbImageRequest(id: string) {
  try {
    return db.Product.findOne({
      where: {
        productId: id,
      },
      include: [
        {
          model: db.Image,
          attributes: ["imageId"],
        },
      ],
    });
  } catch (error: any) {
    console.log("caught", error.message);
  }
}
