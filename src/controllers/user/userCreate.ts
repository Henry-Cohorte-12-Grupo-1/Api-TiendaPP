import db from '../../models';
import express, { Request, Response } from 'express';
import {Role} from '../../interfaces/role'
import {Mailer} from '../mailer/nodeMailer'
const { v4: uuidv4 } = require('uuid')

export  async function userCreate(req: express.Request, res: express.Response) {
    const { firstName, lastName, email, pass, username } = req.body;

    let rUsername = await db.User.findOne({ where: { username: username } })
    let rEmail = await db.User.findOne({ where: { email: email } })
    let code:string = uuidv4() 

    if (rUsername === null) {
        if (rEmail === null) {
            let userCreated = await db.User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: pass,
                username: username,
                role: Role.disabled,
                code: code
            })
            

            // await db.User.addRole(userCreated[0],{roleId:2})

            // await User.addRole(userCreated[0])

        } else res.send('email must be unique')
    } else res.send('username must be unique')

    Mailer(firstName,lastName,email,username,code)

    res.send('successfully created')

}