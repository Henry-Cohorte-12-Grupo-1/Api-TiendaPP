import { Request, response, Response } from "express";
import { questions } from "../../seeders/questions";
//import { resolveContent } from "nodemailer/lib/shared";
import db from "../../models";

export const createDummyQuestions = () => {
  questions.map(async (ques: any) => {
    await db.Question.create(ques)
      .then((resp: any) => console.log(resp))
      .catch((error: any) => console.log(error));
  });
};

export const questionsController = async (req: Request, res: Response) => {
  let productId = req.body.id;

  let userId = await db.Product.findOne({
    where: {
      productId: productId,
    },
  });
  let qs = await db.Question.findAll({
    where: {
      productId: productId,
    },
  });
  return res.send({ resp: qs, id: userId.userId });
};

export const newController = async (req: Request, res: Response) => {
  const { question, userId, productId } = req.body;
  await db.Question.create({
    question: question,
    userId: userId,
    productId: productId,
  });
  return res.send("successful question");
};

export const answerController = async (req: Request, res: Response) => {
  const { answer, questionId } = req.body;
  await db.Question.update(
    { answer: answer },
    {
      where: {
        questionId: questionId,
      },
    }
  );
  return res.send("successful answer");
};
