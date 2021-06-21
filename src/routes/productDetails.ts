import { Router } from "express";
import productDetailsController from "../controllers/product-details/product";

const productDetails = Router();

productDetails.use("/:productId", productDetailsController);

export default productDetails;
