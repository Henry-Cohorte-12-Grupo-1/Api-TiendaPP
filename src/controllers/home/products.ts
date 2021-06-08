import express from 'express'

function productsController (req:express.Request, res:express.Response){
    res.send('Products page')
}

export default productsController
