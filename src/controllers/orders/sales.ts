import express from 'express'
import db from "../../models";
import { orders } from '../../seeders/order';


//export function

async function salesController(req: express.Request, res: express.Response) {
    //busca un producto por id
    const username: string = req.params.userName;
    try {

        const matchUser = await db.User.findOne({
            where: {
                username: username
            }
        })

        const sellerId = matchUser.userId

        const result = await db.Order.findAll({

            include: [
                {
                    model: db.User,
                    attributes: ["username"]
                },
                {
                    model: db.Product,
                    where: {
                        userId: sellerId
                    },
                    include: [{
                        model: db.Image,
                    },
                    {
                        model: db.User,
                        attributes: ['username']
                    },
                    {
                        model: db.Review
                    }]
                }]

        })
        res.send(result)
    }
    catch (error: any) {
        return res.send(error.message)
    }
}

export const createDummyOrders = () => {
    orders.map(async (or) => {
        await db.Order.create(or);
    });
};


export default salesController;