import { Request, Response } from "express";
import db from "../../models";
import { products } from "../../seeders/product";

const { v4: uuidv4 } = require('uuid')

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
    products.map(async (product) => {
        await db.Product.create(product);
    });
};


export async function createProduct(req: Request, res: Response) {

    let { name, description, price, categoryId, images, quantity } = req.body
    //categorias de prueba
    const imagesArr: string[] = images && images.split(" - ")

    price = parseInt(req.body.price)
    categoryId = parseInt(req.body.categoryId)
    quantity = parseInt(req.body.quantity)

    // console.log('IN', name, description,price, images,categoryId,quantity)
    const productId = uuidv4()
    const productCreated = await db.Product.create({
        productId: productId,
        name: name,
        price: price,
        description: description,
        userId: "68f58789-37b2-4a60-838e-93c8eedf7fcc",
        quantity: quantity,
        categoryId: categoryId,

    }).catch((error: any) => (console.log(error)))
    console.log(productCreated)

    imagesArr && imagesArr.forEach(async id => {
        await db.Image.create({
            imageId: id,
            productId: productId,
        })
    })
    res.send(productId)

}


export async function getProduct(req: Request, res: Response) {
    let { product } = req.query
    // let resp = await db.Product.findAll({include:db.Image})

    let resp = await db.Product.findByPk(product, { include: db.Image })

    res.send(resp)
}