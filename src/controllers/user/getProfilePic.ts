import express from "express";
import db from "../../models";

const getProfilePic = async (req: express.Request, res: express.Response) => {
    const { userId } = req.params;
    try {
        let user = await db.User.findOne(
            {
                where: { userId: userId },
                attributes: ["profilePic"]
            }
        );

        if (user) {
            return res.send(user.profilePic);
        } else {
            return res.send("error");
        }
    } catch (error: any) {
        console.log("caught", error.message);
    }
};

export default getProfilePic;