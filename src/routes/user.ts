import { Router } from "express";
import { getAllUsers } from "../controllers/user/user";

const user = Router();

user.use("/getallusers", getAllUsers);

export default user;
