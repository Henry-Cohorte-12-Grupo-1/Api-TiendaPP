import express from "express";
import { dbSellerRequest } from "./calls";

async function sellerController(req: express.Request, res: express.Response) {
  try {
    const NAME: any = req.query.name || "";
    const sellers = await dbSellerRequest(NAME);
    return res.send(sellers)
  } catch (error: any) {
    console.log("caught", error.message);
  }

}
export default sellerController;