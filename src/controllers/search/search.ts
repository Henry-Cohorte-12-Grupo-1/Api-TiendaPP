import express from 'express'

function searchController (req:express.Request, res:express.Response){
    res.send('search')
}

export default searchController