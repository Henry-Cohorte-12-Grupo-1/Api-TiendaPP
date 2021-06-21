import { Router } from "express";
import searchController from "../controllers/search/search";

const search = Router();

search.use("/", searchController);

export default search;
