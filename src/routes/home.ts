import { Router } from "express";
import homeController from "../controllers/home/home";

const home = Router();

home.use("/", homeController);
//Probando si se mete esto en el branch del grupo 1
export default home;
