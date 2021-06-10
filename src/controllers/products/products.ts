import express from 'express'
const products = require('../../data/products');

function productsController (req:express.Request, res:express.Response){
    //productos de prueba 

    res.send(products)
}

export default productsController;