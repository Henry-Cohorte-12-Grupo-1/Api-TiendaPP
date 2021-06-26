import { Request, response, Response } from "express";
import { resolveContent } from "nodemailer/lib/shared";
import db from "../../models";
import { questions } from "../../seeders/questions";

// export interface IQuestions {
//     user:string,
//     question:string
// }

export const createDummyQuestions = () => {
    questions.map(async (ques: any) => {
        await db.Question.create(ques)
            .then((resp: any) => console.log(resp))
            .catch((error: any) => console.log(error))
    });
}


export const questionsController = async (req: Request, res: Response) => {
    console.log('lkgjfdlsjgkfdjgkfdljgkfdljdskaljdsa',req.body)
    let productId = req.body.id
    let qs = await db.Question.findAll({
        where: {
            productId:productId
        }
    })
    console.log('FINDALL:', qs)
    return res.send(qs)
}

export default questionsController