import express from 'express'
const categories = require('../../data/categories');

function categoriesController (req:express.Request, res:express.Response){
    //categorias de prueba 

    res.send(categories)
}

export default categoriesController;