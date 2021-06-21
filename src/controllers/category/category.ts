import db from "../../models";
import { categories } from "../../seeders/category";

//For testing purposes, it loads users from the seeders to DB
export const createDummyCategories = () => {
  categories.map(async (category) => {
    await db.Category.create(category);
  });
};
