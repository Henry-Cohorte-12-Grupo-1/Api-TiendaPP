import { Router } from "express";
import loginController from '../controllers/login/login'

const login = Router();

login.use("/", loginController);

export default login;