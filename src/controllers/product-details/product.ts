import express from 'express'
const product = require('../../data/product');

function productDetailsController(req: express.Request, res: express.Response) {
    //trae el objeto producto que tiene info de uno solo
    //como está hardcodeado solo busca que el id sea el mismo que el de product (22522)
    const id = req.params.productId;
    if (id == product.id) {
        res.send(product)
    } else {
        console.log(id)
        res.send({ error: "Object not found" })
    }
}

export default productDetailsController;