import { Router } from "express";
import passport from "passport";
import { addWishedItem, deleteWishedItem, getWishlist } from "../controllers/wishlist/wishlist";


const wishlist = Router();

wishlist.post("/add", passport.authenticate("jwt", { session: false }), addWishedItem);
wishlist.post("/delete", passport.authenticate("jwt", { session: false }), deleteWishedItem);
wishlist.get("/:userId", passport.authenticate("jwt", { session: false }), getWishlist)

export default wishlist;
