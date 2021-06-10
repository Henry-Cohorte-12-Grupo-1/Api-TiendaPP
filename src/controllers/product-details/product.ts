import express from 'express'
const products = require('../../data/products');

function productDetailsController(req: express.Request, res: express.Response) {
    //trae el objeto producto que tiene info de uno solo
    //como está hardcodeado solo busca que el id sea el mismo que el de product (22522)

    interface obj {
        id: number
    }

    let match: obj;

    match = {
        id: 0
    }

    const id = parseInt(req.params.productId);
    products.forEach((product: obj) => {
        if (id == product.id) {
            match = product
        }
    });
    if (match.id > 0) {
        res.send(match)
    } else {
        res.send({ error: "Object not found" })
    }

}

export default productDetailsController;