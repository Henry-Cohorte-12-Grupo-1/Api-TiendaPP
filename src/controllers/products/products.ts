import express from 'express'

const products = [
    {
        name: 'producto1',
        image: 'imageProducto1',
        description: 'descripcionProducto1'
    },
    {
        name: 'producto2',
        image: 'imageProducto2',
        description: 'descripcionProducto2'
    },
    {
        name: 'producto3',
        image: 'imageProducto3',
        description: 'descripcionProducto3'
    },
    {
        name: 'producto4',
        image: 'imageProducto4',
        description: 'descripcionProducto4'
    },
    {
        name: 'producto5',
        image: 'imageProducto5',
        description: 'descripcionProducto5'
    },
]

function productsController (req:express.Request, res:express.Response){
    //productos de prueba 

    res.send(products)
}

export default productsController