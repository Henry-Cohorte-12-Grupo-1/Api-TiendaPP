import { Router } from "express";
import questionsController from "../controllers/questions/questions";

const user = Router();

user.post("/", questionsController);

export default questions;