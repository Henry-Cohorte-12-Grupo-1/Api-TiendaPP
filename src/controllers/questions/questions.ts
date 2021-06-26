import { Request, Response } from "express";
import db from "../../models";
import { questions } from "../../seeders/questions";

export const createDummyQuestions = () => {
    questions.map((rev) => {
        db.Question.create(rev);
      });
}

const questionsController = (req: Request, res: Response) => {

}

export default questionsController