import { Router } from "express";
import {questionsController} from "../controllers/questions/questions";
// import {postCreate} from '../controllers/questions/questions'

const questions = Router();

questions.post("/", questionsController);
// questions.post("/", postCreate);



export default questions;