import { Request, Response } from 'express';
import { cartItems } from '../../seeders/cartItems';
import db from '../../models';

//===========================================================
//FOR TESTING================================================
//===========================================================
export const createDummyCartItems = async () => {
    for (let cartItem of cartItems) {
        await db.CartItem.create(cartItem);
    }

    await updateOrCreateCartPrice('6d2ba377-b219-4925-b6df-4cbc8575ce50');
};
//===========================================================

//this creates or finds a cartItem and adds it to the user's cart.
//it also updates the Cart total price
//@params body: userId, productId
export async function addCartItem(req: Request, res: Response): Promise<void> {
    let { userId, productId } = req.body;
    await db.CartItem.findOrCreate({
        where: { userId, productId },
    })
        .then(async (createdItem: object, created: boolean) => {
            if (!created) {
                res.status(200).send("Can't add item: Item already in cart!");
            } else {
                await updateOrCreateCartPrice(userId);
                res.status(200).send(createdItem);
            }
        })
        .catch((err: object) => console.error(err));
}

export async function updateOrCreateCartPrice(userId: string) {
    const totalPrice = await getTotalCartPrice(userId);
    const [cart, created] = await db.Cart.findOrCreate({
        where: { userId },
        defaults: { totalPrice },
    });
    if (!created) {
        //updating entry
        cart.totalPrice = totalPrice;
        await cart.save();
    }
}

//this returns a promise which
//resolves into a NUMBER: added price of all cart items of a userId
export function getTotalCartPrice(userId: string) {
    return db.CartItem.findAll({
        where: { userId: userId },
        include: {
            model: db.Product,
            attributes: ['price', 'quantity'],
        },
        raw: true,
    })
        .then((res: Array<object>) => {
            const quantityArray = res.map((cartItem: any) => cartItem.quantity);
            const priceArray = res.map((cartItem: any) => cartItem['Product.price']);
            var totalPrice = 0;
            for (var i = 0; i < priceArray.length; i++) {
                totalPrice += priceArray[i] * quantityArray[i];
            }
            return totalPrice;
        })
        .catch((e: object) => {
            console.log(e);
        });
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
