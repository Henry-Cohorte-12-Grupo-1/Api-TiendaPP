import { Request, Response } from 'express';
import { cartItems } from '../../seeders/cartItems';
import db from '../../models';

//===========================================================
//FOR TESTING================================================
//===========================================================
export const createDummyCartItems = async () => {
    for (let cartItem of cartItems) {
        await db.CartItem.create(cartItem);
        await updateOrCreateCartPrice(cartItem.userId);
    }
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

//this returns all products on the user's cart
export function getCart(req: Request, res: Response) {
    let { userId } = req.body;
    db.CartItem.findAll({
        where: { userId },
        include: {
            model: db.Product,
        },
    })
        .then((cartItems: Array<object>) => {
            res.send(cartItems);
        })
        .catch((error: object) => res.send(error));
}

//sets quantity of cart item
//body: userId, productId, quantity
export async function setCartItemQuantity(req: Request, res: Response) {
    let { userId, productId, quantity } = req.body;
    let qty: number = parseInt(quantity);
    if (qty > 0) {
        let foundItem = await db.CartItem.findOne({
            where: {
                userId,
                productId,
            },
        }).catch((error: object) => res.send(error));

        if (foundItem) {
            foundItem.quantity = qty;
            await foundItem.save();
            updateOrCreateCartPrice(userId);
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(400);
    }
}

//delete all items from CartItems model
export function deleteCartItems(req: Request, res: Response) {
    let { userId, productId } = req.body;
    db.CartItem.destroy({
        where: {
            userId,
            productId,
        },

        force: true,
    })
        .then((result: number) => {
            if (!result) {
                res.status(400).send('Item not found or already deleted');
            } else {
                res.send('item deleted');
            }
        })
        .catch((error: object) => {
            res.status(400).send(error);
        });
}
