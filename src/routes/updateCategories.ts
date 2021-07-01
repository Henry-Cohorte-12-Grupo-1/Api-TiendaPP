import { Router } from "express";
import passport from "passport";
import updateCategoriesController from "../controllers/updateCategories/updateCategories";

const updateCategories = Router();

updateCategories.put("/", passport.authenticate("admin",{session:false}), updateCategoriesController);

export default updateCategories;
