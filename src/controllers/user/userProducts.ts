import express from 'express'
import db from "../../models";


async function userProductsController(req: express.Request, res: express.Response) {
    //busca un producto por id


    const username: string = req.params.userName;


    try {
        const userQuery = await db.User.findOne({
            where: {
                username: username,
            }
        })
        if (userQuery == undefined) {
            throw new Error(`${username} does not exist`)
        }
        else {
            const userProductsId: string = userQuery.userId
            const allProducts = await db.Product.findAll({
                where: {
                    userId: userProductsId
                },
                include: [{
                    model: db.Image,
                    attributes: ['imageId']
                },
                {
                    model: db.Category,
                    attributes: ['name']
                }]
            })

            return res.send(allProducts)
        }
    }
    catch (error: any) {
        return res.send(error.message)
    }




}

export default userProductsController;