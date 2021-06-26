import { Router } from "express";
import { questionsController, newController, answerController } from "../controllers/questions/questions";
// import {postCreate} from '../controllers/questions/questions'

const questions = Router();

questions.post("/", questionsController);
questions.post('/new', newController);
questions.post('/answer', answerController);
// questions.post("/", postCreate);



export default questions;