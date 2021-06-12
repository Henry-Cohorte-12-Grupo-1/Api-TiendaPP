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


export async function createProduct (req:Request, res:Response){
    //categorias de prueba 
    let name = req.body.name
    let description = req.body.description
    let price = parseInt(req.body.price)
    let images = req.body.images
    let category = parseInt(req.body.category)
    let quantity = parseInt(req.body.quantity)

    let create =   await db.Product.create({
            name: req.body.name,
            price: price,
            description: req.body.description,
            userId: "6d2ba377-b219-4925-b6df-4cbc8575ce50",
            quantity: quantity,
            categoryId: category,

        }).catch((error:any) => (console.log(error)))

    res.send(create)
    console.log({name,description,price,images,category})

    db

}


export async function getProduct(req:Request , res:Response) {
    let {product} = req.query
    // let resp = await db.Product.findAll({include:db.Image})

    let resp = await db.Product.findByPk(product,{include:db.Image})

    res.send(resp)
}