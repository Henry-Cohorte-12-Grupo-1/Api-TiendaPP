import express from 'express'
import db from '../../models';
const categories = require('../../data/categories');

async function categoriesController (req:express.Request, res:express.Response){
    //categorias de prueba 
    let resp = await db.Category.findAll()
    res.send(resp)

}

export default categoriesController