import { Request, Response } from "express";
import db from "../../models";
import { products } from "../../seeders/product";

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
