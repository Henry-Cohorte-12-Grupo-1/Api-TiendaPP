import { Router } from "express";
import updateCategoriesController from "../controllers/updateCategories/updateCategories";

const updateCategories = Router();

updateCategories.put("/", updateCategoriesController);

export default updateCategories;
