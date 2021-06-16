import express from 'express'
import db from "../../models";
import { orders } from '../../seeders/order';


//export function

async function ordersController(req: express.Request, res: express.Response) {
    //busca un producto por id
    const username: string = req.params.userName;
    try {

        const matchUser = await db.User.findOne({
            where: {
                username: username
            }
        })

        const id = matchUser.userId

        const result = await db.Order.findAll({
            where: {
                userId: id
            },
            include: {
                model: db.Product,
                attributes: ['name', 'productId']
            }

        })
        console.log(result)
        return res.send(result)
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


export default ordersController;