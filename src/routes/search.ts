import { Router } from "express";
import searchController from "../controllers/search/search";
import sellerController from "../controllers/search/seller";

const search = Router();

search.get("/seller", sellerController);
search.get("/", searchController);

export default search;
