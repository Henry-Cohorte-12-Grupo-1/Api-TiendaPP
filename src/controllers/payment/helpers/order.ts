import express from "express";

async function order(req: express.Request, res: express.Response) {
    return console.log("estoy en order")
}


export default order;