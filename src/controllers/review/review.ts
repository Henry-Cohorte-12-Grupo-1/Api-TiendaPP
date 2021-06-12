import { Request, Response } from "express";
import db from "../../models";
import { reviews } from "../../seeders/review";

//For testing purposes, it loads users from the seeders to DB
export const createDummyReviews = () => {
    reviews.map((rev) => {
        db.Review.create(rev);
    });
};
