import { Router } from "express";
import { getAllProducts } from "../controllers/product/product";

const product = Router();

product.use("/getallproducts", getAllProducts);

export default product;
