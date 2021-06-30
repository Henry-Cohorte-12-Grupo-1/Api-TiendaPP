import { Router } from "express";
import { updateProduct } from "../controllers/product/updateProduct";
import {
  getAllProducts,
  createProduct,
  getProduct,
} from "../controllers/product/product";
import passport from "passport";

const product = Router();

product.get("/", getProduct);

product.use("/getallproducts", getAllProducts);

product.post("/", passport.authenticate("jwt", { session: false }) ,createProduct);

product.put("/", updateProduct);

export default product;
