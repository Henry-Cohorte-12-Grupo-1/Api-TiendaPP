import { Router } from "express";
import { updateProduct } from "../controllers/product/updateProduct";
import {
  getAllProducts,
  createProduct,
  getProduct,
} from "../controllers/product/product";

const product = Router();

product.get("/", getProduct);

product.use("/getallproducts", getAllProducts);

product.post("/", createProduct);

product.put("/", updateProduct);

export default product;
