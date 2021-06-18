import { Router } from "express";
import reviewsController from "../controllers/review/review";


const user = Router();

user.post("/", reviewsController);

export default user;
