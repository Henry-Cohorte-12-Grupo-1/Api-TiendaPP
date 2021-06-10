//imports
import { Router, Request, Response, NextFunction } from "express";
import search from "./search";
import home from "./home";
import dummyData from "./dummyData";
import user from "./user";
import product from "./product";

const router = Router();

//routers

router.use("/home", home);
router.use("/search", search);
router.use("/dummyData", dummyData);
router.use("/user", user);
router.use("/product", product);

//Get a Home de prueba
router.get("/", (req: Request, res: Response) => {
    res.send("Pagina Principal");
});

//exports
export default router;
