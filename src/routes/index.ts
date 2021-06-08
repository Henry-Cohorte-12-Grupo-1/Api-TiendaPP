//imports
import { Router, Request, Response, NextFunction } from "express";
import search from "./search";

const router = Router();

//routers

router.use("/search", search);

//Get a Home de prueba
router.get("/", (req: Request, res: Response) => {
    res.send("Pagina Principal");
});

//exports
export default router;
