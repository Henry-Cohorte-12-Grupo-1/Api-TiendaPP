import { Router } from "express";
import loginController from '../controllers/login/login'
import verification from '../controllers/login/verification'

const login = Router();

login.post("/adminValidate", verification);
login.use("/", loginController);

export default login;