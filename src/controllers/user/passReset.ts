import express from "express"
import db from "../../models";

export const passReset = async (req: express.Request, res: express.Response) => {
    const {pass, userId} = req.body
    console.log(pass,userId)

    let user = await db.User.update({ password:pass}, {
        where: { userId:userId },
    })

    if(user){
        res.send('succesfully updated')
    } else {
        res.send('error')
    }
}