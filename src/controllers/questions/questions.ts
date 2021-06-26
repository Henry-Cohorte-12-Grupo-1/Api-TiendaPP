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

    let productId = req.body.id

    let userId = await db.Product.findOne({
        where: {
            productId:productId
        }
    })
    let qs = await db.Question.findAll({
        where: {
            productId:productId
        },
    })

    // let resp = qs.map((question:any)=>{question,userId.userId})
    return res.send({resp: qs, id: userId.userId})
}

export const newController = async (req: Request, res: Response) => {
    const {question, userId, productId} = req.body;
    const resp = db.Question.create({
        question:question,
        userId:userId,
        productId:productId,
    })
    res.send('succesful question');
}

export const answerController = async (req: Request, res: Response) => {
    const { answer, questionId} = req.body;
    const resp = db.Question.update({answer:answer},
        {where:{
            questionId:questionId
        }
    })
    res.send('succesful answer');
}
