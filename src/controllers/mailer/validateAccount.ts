import db from "../../models";
import express, { Request, Response } from "express";
import { Role } from "../../interfaces/role";

const validateAccount = async (req: express.Request, res: express.Response) => {
  const { id } = req.query;
  //console.log(id)
  try {
    let resp = await db.User.update(
      { role: Role.user },
      {
        where: {
          code: id,
        },
      }
    );
    if (resp[0] == 1) {
      return res.send("verificado");
    } else {
      return res.send("error");
    }
  } catch (error: any) {
    console.log("caught", error.message);
  }

};

export default validateAccount;
