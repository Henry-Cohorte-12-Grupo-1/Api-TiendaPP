import express from "express";

async function stock(req: express.Request, res: express.Response) {
    return console.log("estoy en stock")
}


export default stock;