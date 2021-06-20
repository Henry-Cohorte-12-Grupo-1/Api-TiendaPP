//imports

import { Router, Request, Response, NextFunction } from "express";
import search from "./search";
import home from "./home";
import login from "./login";
import verification from '.'
import cart from './cart';
import dummyData from "./dummyData";
import user from "./user";
import product from "./product";
import products from "./products";
import categories from "./categories";
import updateCategories from "./updateCategories";
import reviews from "./reviews";

import productDetails from "./productDetails";
import userProducts from "./userProducts";

import passportRoutes from "./passportRegister";
import passGoogleOARoutes from "./auth";

import orders from "./orders";
import validateEmail from "./validateEmail";

import payment from "./payment";


const router = Router();

//routers

router.use("/home", home);
router.use("/login", login);

router.use("/categories", categories);
router.use("/updateCategories", updateCategories);

router.use('/products', products);

router.use('/productDetails', productDetails);
router.use('/userName', userProducts);

router.use("/search", search);
router.use("/dummyData", dummyData);
router.use("/user", user);
router.use("/product", product);
router.use("/orders", orders);
router.use("/reviews", reviews);

router.use('/cart', cart);

router.use("/passportRegister", passportRoutes);
router.use("/auth", passGoogleOARoutes)

router.use("/validate", validateEmail);

router.use("/payment", payment);

//Get a Home de prueba
router.get("/", (req: Request, res: Response) => {
  res.send("Pagina Principal");

});

//exports
export default router;
