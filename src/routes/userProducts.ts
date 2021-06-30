import { Router } from "express";
import passport from "passport";
import userProductsController from "../controllers/user/userProducts";

const userProducts = Router();

userProducts.use("/:userName", passport.authenticate("jwt", { session: false }),userProductsController);

export default userProducts;
