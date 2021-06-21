import { Request, Response } from "express";
import { createDummyUsers } from "../user/user";
import { createRoles } from "../role/role";
import { createDummyProducts } from "../product/product";
import { createDummyCategories } from "../category/category";
import { createDummyImages } from "../image/image";
import { createDummyReviews } from "../review/review";
import { createDummyOrders } from "../orders/orders";
import { createDummyCartItems } from "../cart/cart";

//This is supposed to load all dummy data from the seeders folder
//then you can use the routes in each controller to get the data
export function loadDummyData(req: Request, res: Response) {
  // res.send("<h1>BUENAS</h1>");
  createRoles();
  createDummyUsers();
  createDummyCategories();
  createDummyProducts();
  createDummyImages();
  createDummyReviews();

  createDummyCartItems();

  createDummyOrders();

  return res.sendStatus(200);
}
