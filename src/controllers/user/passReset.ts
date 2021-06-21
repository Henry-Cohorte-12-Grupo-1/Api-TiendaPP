import express from "express";
import db from "../../models";

export const passReset = async (
  req: express.Request,
  res: express.Response
) => {
  const { pass, userId } = req.body;
  //console.log(pass, userId)
  try {
    let user = await db.User.update(
      {
        password: pass,
        forcePassword: false,
      },
      {
        where: { userId: userId },
      }
    );

    if (user) {
      return res.send("succesfully updated");
    } else {
      return res.send("error");
    }
  } catch (error: any) {
    console.log("caught", error.message);
  }
};
