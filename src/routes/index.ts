import { Router, Request, Response, NextFunction } from "express";
import search from "./search";
import home from "./home";
import login from "./login";

import cart from "./cart";
import dummyData from "./dummyData";
import user from "./user";
import product from "./product";
import products from "./products";
import categories from "./categories";
import updateCategories from "./updateCategories";
import reviews from "./reviews";
import questions from "./questions";
import wishlist from "./wishlist";

import productDetails from "./productDetails";
import userProducts from "./userProducts";

import passportRoutes from "./passportRegister";
import passOARoutes from "./auth";

import orders from "./orders";
import validateEmail from "./validateEmail";

import payment from "./payment";
import sellerProfile from "./sellerprofile"



const router = Router();

//routers

router.use("/home", home);
router.use("/login", login);

router.use("/categories", categories);
router.use("/updateCategories", updateCategories);

router.use("/products", products);

router.use("/productDetails", productDetails);
router.use("/userName", userProducts);

router.use("/search", search);
router.use("/dummyData", dummyData);
router.use("/user", user);
router.use("/product", product);
router.use("/orders", orders);
router.use("/reviews", reviews);
router.use("/questions", questions);

router.use("/cart", cart);

router.use("/wishlist", wishlist)

router.use("/passportRegister", passportRoutes);
router.use("/auth", passOARoutes);

router.use("/validate", validateEmail);

router.use("/payment", payment);
router.use("/seller", sellerProfile);

//Get a Home de prueba
router.get("/", (req: Request, res: Response) => {
  res.send("Pagina Principal");
});

//exports
export default router;
