import express, { Request, Response } from "express";
import db from "../../models";

const userUpdate = async (req: express.Request, res: express.Response) => {
    const { role, userId, username } = req.body;
    console.log(userId)

    let user = await db.User.update({ roleId: role }, {
        where: { username: username },
    })

    if(user){
        res.send('succesfully updated')
    } else {
        res.send('error')
    }
}

export default userUpdate