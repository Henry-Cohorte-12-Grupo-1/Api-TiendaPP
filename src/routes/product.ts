import { Router } from "express";
import { getAllProducts, createProduct, getProduct} from "../controllers/product/product";


const product = Router();

product.get("/", getProduct)

product.use("/getallproducts", getAllProducts);

product.post('/', createProduct)

export default product;
