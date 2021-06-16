import db from '../../models';
import express, { Request, Response } from 'express';
import { RSA_NO_PADDING } from 'constants';
import user from '../../routes/user';

export default async function UserCreate(req: express.Request, res: express.Response) {
    const { firstName, lastName, email, pass, username } = req.body;

    let rUsername = await db.User.findOne({ where: { username: username } })
    let rEmail = await db.User.findOne({ where: { email: email } })


    if (rUsername === null) {
        if (rEmail === null) {
            let userCreated = await db.User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: pass,
                username: username,
                role:'disabled'
            })

            // await db.User.addRole(userCreated[0],{roleId:2})

            // await User.addRole(userCreated[0])

        } else res.send('email must be unique')
    } else res.send('username must be unique')



    res.send('successfully created')

}