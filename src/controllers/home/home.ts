import express from 'express'

function homeController (req:express.Request, res:express.Response){
    res.send('home page')
}

export default homeController

