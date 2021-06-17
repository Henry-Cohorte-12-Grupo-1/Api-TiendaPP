import { Router } from "express";
import { getAllUsers } from "../controllers/user/user";
import userUpdate from "../controllers/user/userUpdate";
import { userCreate } from "../controllers/user/userCreate";

const user = Router();

user.use("/getallusers", getAllUsers);
user.use('/userUpdate', userUpdate);
user.use("/userCreate", userCreate);

export default user