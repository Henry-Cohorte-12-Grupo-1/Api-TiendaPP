import { Request, Response } from "express";
import db from "../../models";
import { products } from "../../seeders/product";

const { v4: uuidv4 } = require("uuid");

////////////////////////////////////////////
//FOR TESTING PURPOSES//////////////////////
////////////////////////////////////////////
//For testing purposes, Gets all the user DB with roles.
export function getAllProducts(req: Request, res: Response) {
  db.Product.findAll({
    include: [db.Category, db.Image, db.User],
  })
    .then((result: object) => res.json(result))
    .catch((err: object) => console.error(err));
}

//For testing purposes, it loads users from the seeders to DB
export const createDummyProducts = () => {
  try {
    products.map(async (product) => {
      await db.Product.create(product);
    });
  } catch (error: any) {
    console.log("caught", error.message);
  }
};

export async function createProduct(req: Request, res: Response) {
  let { name, description, price, categoryId, joinedImage, quantity, userId } =
    req.body;
  //categorias de prueba
  const imagesArr: string[] = joinedImage.length && joinedImage.split(" - ");

  price = parseInt(req.body.price);
  categoryId = parseInt(req.body.categoryId);
  quantity = parseInt(req.body.quantity);
  const productId = uuidv4();

  // console.log('IN', name, description,price, images,categoryId,quantity)
  try {
    const productCreated = await db.Product.create({
      productId: productId,
      name: name,
      price: price,
      description: description,
      userId: userId,
      quantity: quantity,
      categoryId: categoryId,
    });

    imagesArr &&
      imagesArr.forEach(async (id) => {
        await db.Image.create({
          imageId: id,
          productId: productId,
        });
      });
    return res.send(productId);
  } catch (error: any) {
    console.log("caught", error.message);
  }
}

export async function getProduct(req: Request, res: Response) {
  let { product } = req.query;
  // let resp = await db.Product.findAll({include:db.Image})
  try {
    let resp = await db.Product.findByPk(product, { include: db.Image });

    return res.send(resp);
  } catch (error: any) {
    console.log("caught", error.message);
  }
}
