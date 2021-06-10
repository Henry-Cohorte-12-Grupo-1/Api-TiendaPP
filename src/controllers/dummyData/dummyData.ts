import app from "../../app";
import { Request, Response } from "express";
import { createDummyUsers } from "../user/user";
import { createRoles } from "../role/role";
import { createDummyProducts } from "../product/product";
import { createDummyCategories } from "../category/category";
import { createDummyImages } from "../image/image";

//This is supposed to load all dummy data from the seeders folder
//then you can use the routes in each controller to get the data
export function loadDummyData(req: Request, res: Response) {
    // res.send("<h1>BUENAS</h1>");
    createRoles();
    createDummyUsers();
    createDummyCategories();
    createDummyProducts();
    createDummyImages();
    res.sendStatus(200);
}
