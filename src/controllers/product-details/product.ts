import express from 'express'
import db from "../../models";


async function productDetailsController(req: express.Request, res: express.Response) {
    //busca un producto por id
    const id: string = req.params.productId;
    try {
        const result = await db.Product.findOne({
            where: {
                productId: id
            },
            include: [{
                model: db.Review,
                attributes: ['score', 'review']
            },
            {
                model: db.Image,
                attributes: ['imageId']
            }]

        })
        console.log(result)
        return res.send(result)
    }
    catch (error: any) {
        return res.send(error.message)
    }


}

export default productDetailsController;