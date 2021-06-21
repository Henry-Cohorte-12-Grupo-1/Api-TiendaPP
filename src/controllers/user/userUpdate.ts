import express from "express";
import db from "../../models";

const userUpdate = async (req: express.Request, res: express.Response) => {
  const { role, userId, username, passReset } = req.body;
  //console.log(userId,passReset)
  try {
    let user = await db.User.update(
      { roleId: role, forcePassword: passReset },
      {
        where: { username: username },
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

export default userUpdate;
