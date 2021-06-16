import { Request, Response } from 'express';
import { cartItems } from '../../seeders/cartItems';
import app from '../../app';
import db from '../../models';
import categoriesController from '../products/categories';

//import { users } from "../../seeders/user";

//For testing purposes, Gets all the user DB with roles.
/*
export function getAllUsers(req: Request, res: Response) {
    db.User.findAll({
        include: {
            model: db.Role,
        },
    })
        .then((result: object) => res.json(result))
        .catch((err: object) => console.error(err));
}
*/

//For testing purposes, it loads users from the seeders to DB

async function adder(item: any, model: any) {
    try {
        return await model.create(item);
    } catch (error) {
        return console.log(error);
    }
}

async function updateOrCreate(model: any, where: any, newItem: any) {
    // First try to find the record
    const foundItem = await model.findOne({ where });
    if (!foundItem) {
        // Item not found, create a new one
        const item = await model.create(newItem);
        return { item, created: true };
    }
    // Found an item, update it
    const item = await model.update(newItem, { where });
    return { item, created: false };
}

export const createDummyCartItems = async () => {
    for (let each of cartItems) {
        await adder(each, db.CartItem);
        await createOrUpdateCartPrice(each.userId);
    }
};

//this creates or finds a cartItem and adds it to the user's cart.
//params: userId, productId
//@res:

export async function addCartItem(req: Request, res: Response): Promise<void> {
    let { userId, productId } = req.body;
    await db.CartItem.findOrCreate({
        where: { userId, productId },
    })
        .then((createdItem: object, created: boolean) => {
            if (!created) {
                res.status(200).send("Can't add item: Item already in cart!");
            } else {
                //createOrUpdateCartPrice(userId);
                res.status(200).send(createdItem);
            }
        })
        .catch((err: object) => console.error(err));
}

//gets all cart items and adds up the total price
export async function createOrUpdateCartPrice(userId: string): Promise<Array<object>> {
    return await db.CartItem.findAll({
        where: {
            userId: userId,
        },
        include: {
            model: db.Product,
            attributes: ['price'],
        },
        raw: true,
    })
        .then(async (response: Array<object>) => {
            //add up prices and get total price

            const priceArray = response.map((x: any) => x['Product.price']);
            const totalPrice: number = priceArray.reduce((a, b) => a + b);

            await updateOrCreate(db.Cart, { userId: userId }, { userId: userId, totalPrice: totalPrice }).then();
        })
        .catch((err: object) => console.log(err));
}

export async function testSumAllPrices(req: Request, res: Response) {
    //let { userId } = req.body;
    console.log('ENTRE AL TEST SUM');
    let userId = '6d2ba377-b219-4925-b6df-4cbc8575ce50';
    let the_res = await createOrUpdateCartPrice(userId);
    console.log('WHAT WAS FOUND IS:', the_res);
    let ans = [];
    // for (let each of the_res) {
    //     ans.push(each.dataValues.Product.Price);
    // }
    const priceArray = the_res.map((x: any) => x['Product.price']);
    const totalPrice: number = priceArray.reduce((a, b) => a + b);
    console.log(totalPrice);
    res.send({ totalPrice });
}

export function getCart(req: Request, res: Response) {
    let { userId } = req.body;
    const userCart = db.CartItem.findAll({
        where: userId,
        include: {
            model: db.Product,
        },
    })
        .then(() => res.send(userCart))
        .catch((error: object) => res.send(error));
}
