//imports
import { Router, Request, Response, NextFunction } from "express";
import search from "./search";
import home from "./home";

import dummyData from "./dummyData";
import user from "./user";
import product from "./product";
import products from "./products";
import categories from "./categories";
import updateCategories from "./updateCategories";

import productDetails from "./productDetails";
import userProducts from "./userProducts"
import orders from "./orders";
import validateEmail from "./validateEmail";


const router = Router();

//routers


router.use("/home", home);

router.use("/categories", categories);
router.use("/updateCategories", updateCategories);

router.use("/products", products);

router.use("/home", home);


router.use("/search", search);
router.use("/dummyData", dummyData);
router.use("/user", user);
router.use("/product", product);
router.use("/orders", orders)

router.use("/productDetails", productDetails);
router.use("/userName", userProducts);

router.use("/validate", validateEmail);

//Get a Home de prueba
router.get("/", (req: Request, res: Response) => {
    res.send("Pagina Principal");
});

//exports
export default router;
