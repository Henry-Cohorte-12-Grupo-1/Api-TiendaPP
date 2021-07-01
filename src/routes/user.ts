import { Router } from "express";
import { getAllUsers } from "../controllers/user/user";
import userUpdate from "../controllers/user/userUpdate";
import { userCreate } from "../controllers/user/userCreate";
import { passReset } from "../controllers/user/passReset";
import passport from "passport";

const user = Router();

user.use("/getallusers", passport.authenticate("admin",{session:false}), getAllUsers);
user.use("/userUpdate", passport.authenticate("admin",{session:false}), userUpdate);
user.use("/userCreate", userCreate);
user.put("/passReset", passReset);

export default user;
