import { Router } from "express";
import { getAllProducts, createProduct, getProduct } from "../controllers/product/product";
import { updateProduct } from "../controllers/product/updateProduct";


const product = Router();

product.get("/", getProduct)

product.use("/getallproducts", getAllProducts);

product.post('/', createProduct);

product.put('/', updateProduct)

export default product;
