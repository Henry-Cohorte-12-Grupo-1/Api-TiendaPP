import { Request, Response } from 'express';
import { cartItems } from '../../seeders/cartitems';
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
export const createDummyCartItems = () => {
    cartItems.map(async (cartItem: object) => {
        await db.CartItem.create(cartItem);
    });
};

//this creates or finds a cartItem and adds it to the user's cart.
//params: userId, productId
//@res:
export function addCartItem(req: Request, res: Response): void {
    let { userId, productId } = req.body;

    db.CartItem.findOrCreate({
        where: { userId, productId },
    })
        .then((createdItem: object, created: boolean) => {
            if (!created) {
                res.status(200).send("Can't add item: Item already in cart!");
            } else {
                //createOrUpdateCartPrice
                res.status(200).send(createdItem);
            }
        })
        .catch((err: object) => console.error(err));
}

//gets all cart items and adds up the total price
export function createOrUpdateCartPrice(userId: string): Promise<Array<object>> {
    let totalPrice = 0;
    var ret = [{}];

    return (
        db.CartItem.findAll({
            where: {
                userId: userId,
            },
            include: {
                model: db.Product,
                attributes: ['price'],
            },
            raw: true,
        })
            .then((response: Array<object>) => {
                //add up prices and get total price
                ret = response;
                console.log('RESPONSE DENTRO DEL THEN: ', ret);
                return ret;
            })
            //create or update the cart table with total price
            // .then((dbResponse: Array<object>) => {
            //     //adds all idividual prices
            //     // // totalPrice = foundCartItems.reduce((totalSum:number, currentVal:object) => {
            //     // //     return totalSum+1;
            //     // // });
            //     // foundCartItems = dbResponse.dataValues
            //     // for(var product of foundCartItems){
            //     //     product
            //     // }
            //     ret = dbResponse;
            // })
            .catch((err: object) => console.error(err))
    );
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
