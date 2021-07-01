import express from "express";
import db from "../../models";

const updatePic = async (req: express.Request, res: express.Response) => {
    const { userId, profilePic } = req.body;
    try {
        let user = await db.User.update(
            { profilePic: profilePic },
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

export default updatePic;
