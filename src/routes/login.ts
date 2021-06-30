import { Router } from "express";
import passport from "passport";
import loginController from '../controllers/login/login'
import verification from '../controllers/login/verification'

const login = Router();

login.use("/adminValidate", verification);
login.use("/", loginController);

export default login;