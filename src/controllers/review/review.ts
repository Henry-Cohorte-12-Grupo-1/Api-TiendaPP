import { Request, Response } from "express";
import db from "../../models";
import { reviews } from "../../seeders/review";

//For testing purposes, it loads users from the seeders to DB

export const createDummyReviews = () => {
    reviews.map((rev) => {
        db.Review.create(rev);
    });
};

async function reviewsController(req: Request, res: Response) {

    //export function
    const username: string = req.body.username;
    const productId: string = req.body.productId;
    const score: number = req.body.score;
    const review: string = req.body.review;


    // busca el id del usuario que compró eso
    try {
        const matchUser: any = await db.User.findOne({
            where: {
                username: username,
            }
        })
        if (!matchUser) {
            res.send({ error: "user not found" })
        }
        const userId: number = matchUser.userId

        const userReview = await db.Review.findOrCreate({
            where: {
                userId: userId,
                productId: productId
            },
            defaults: {
                score: score,
                review: review
            }
        })
        res.send(userReview)
    }
    catch (error: any) {
        return res.send(error.message)
    }
}

export default reviewsController;


