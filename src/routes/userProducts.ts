import { Router } from "express";
import userProductsController from "../controllers/user/userProducts";

const userProducts = Router();

userProducts.use("/:userName", userProductsController);

export default userProducts;
