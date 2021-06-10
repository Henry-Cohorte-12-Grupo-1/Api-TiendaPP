//imports
import { Router, Request, Response, NextFunction } from "express";
import search from "./search";
import home from "./home";
import products from "./products";
import categories from "./categories";
import productDetails from "./productDetails";

const router = Router();

//routers

router.use("/categories", categories)

router.use("/products", products)

router.use("/home", home)

router.use("/search", search);

router.use("/productDetails", productDetails);

//Get a Home de prueba
router.get("/", (req: Request, res: Response) => {
    res.send("Pagina Principal");
});

//exports
export default router;
