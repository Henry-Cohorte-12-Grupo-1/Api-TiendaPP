import { Router } from "express";
import { addWishedItem, deleteWishedItem, getWishlist } from "../controllers/wishlist/wishlist";


const wishlist = Router();

wishlist.post("/add", addWishedItem);
wishlist.post("/delete", deleteWishedItem);
wishlist.get("/:userId", getWishlist)

export default wishlist;
