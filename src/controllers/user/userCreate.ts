import db from '../../models';
import express, { Request, Response } from 'express';
import user from '../../routes/user';
import { RSA_NO_PADDING } from 'constants';

export default async function UserCreate(req: express.Request, res: express.Response) {
    const { firstName, lastName, email, pass, username } = req.body;

    let rUsername = await db.User.findOne({ where: { username: username } })
    let rEmail = await db.User.findOne({ where: { email:email } })


    if(rUsername===null){
        if(rEmail===null){
            await db.User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: pass,
                username: username
            })
        }else res.send('email must be unique')
    }else res.send('username must be unique')

    res.send('successfully created')

}