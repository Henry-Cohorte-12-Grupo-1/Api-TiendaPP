import { Router } from "express";
import newSellerProfile from "../controllers/sellerProfile/newSellerProfile";
import sellerPageProducts from "../controllers/sellerProfile/sellerProfile";


const sellerProfile = Router();

sellerProfile.use("/:userName", sellerPageProducts);
sellerProfile.post("/", newSellerProfile);

export default sellerProfile;