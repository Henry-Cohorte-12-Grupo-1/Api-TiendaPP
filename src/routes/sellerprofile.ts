import { Router } from "express";
import passport from "passport";
import newSellerProfile from "../controllers/sellerProfile/newSellerProfile";
import sellerPageProducts from "../controllers/sellerProfile/sellerProfile";


const sellerProfile = Router();

sellerProfile.use("/:userName", sellerPageProducts);
sellerProfile.post("/", passport.authenticate("jwt", { session: false }), newSellerProfile);

export default sellerProfile;