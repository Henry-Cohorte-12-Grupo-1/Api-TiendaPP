import { Router } from "express";
import { getAllProducts, createProduct} from "../controllers/product/product";


const product = Router();

product.use("/getallproducts", getAllProducts);

product.post('/', createProduct)

export default product;
