import { Router } from "express";
import ordersController from "../controllers/orders/orders";
import { updateOrder } from "../controllers/orders/orders";
import salesController from "../controllers/orders/sales";

const orders = Router();

orders.use("/sales/:userName", salesController);
orders.use("/update", updateOrder);
orders.use("/:userName", ordersController);

export default orders;
