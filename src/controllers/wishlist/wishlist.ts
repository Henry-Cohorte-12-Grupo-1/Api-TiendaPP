import { Request, Response } from "express";
import db from "../../models";

export async function getWishlist(req: Request, res: Response) {
    const userId: string = req.params.userId

    try {
        const wishlist = await db.Wishlist.findAll({
            where: {
                userId: userId
            },
            include: {
                model: db.Product,
                include: {
                    model: db.Image
                }
            }
        })
        return res.send(wishlist)
    } catch (error: any) {
        res.send(error.message)
    }
}

export async function addWishedItem(req: Request, res: Response) {
    //export function

    const { userId, productId } = req.body

    try {

        await db.Wishlist.findOrCreate({
            where: {
                userId: userId,
                productId: productId,
            }
        });
        res.send("Item added to your wishlist!");
    } catch (error: any) {
        return res.send(error.message);
    }
}

export async function deleteWishedItem(req: Request, res: Response) {

    const { userId, productId } = req.body

    try {
        await db.Wishlist.destroy({
            where: {
                userId: userId,
                productId: productId
            },
            force: true
        })
        return res.send("Item erased from your wishlist!")
    } catch (error: any) {
        return res.send(error.message)
    }
}

