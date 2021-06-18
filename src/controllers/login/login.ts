import express, { Request, Response} from 'express'; 
import db from '../../models';
import crypto from 'crypto';

import { IEmail } from '../../interfaces/mailer';
import {Mailer} from '../mailer/nodeMailer'
import jwt from 'jsonwebtoken';
import config from '../../lib/config';

function createToken(user:any) {
    return jwt.sign({ id: user.userId,username: user.username, email: user.email, user:true}, config.JWT_SECRET, {
      expiresIn: 86400
    });
}

function createTokenAdmin(user:any) {
    return jwt.sign({ id: user.userId,username: user.username, email: user.email, admin:true}, config.JWT_SECRET_ADMIN, {
      expiresIn: 86400
    });
}


const login = async (req: express.Request, res: express.Response) => {
    const { email, pass }= req.body;
    console.log(`email: ${email} pass: ${pass}`)

    const resp = await db.User.findOne({ where: {email: email}})
    console.log('--------------------------------')
    console.log(resp);
    console.log('--------------------------------')

    const key = Math.floor(100000 + Math.random() * 900000);


    let mailFormat:IEmail = {      
            from: '"TiendApp" <tomygaar@gmail.com>', // sender address
            to: `${email}, tomasqgarcia@gmail.com`, // list of receivers
            subject: "Two-Steps Validation", // Subject line
            text: "Two-Steps Validation", // plain text body
            html: `<b>Welcome ${email}!</b>
            <p>Please use the following code to complete your two steps validation on TiendApp page:</p>
            <p>Your 6 digits key: ${key}<p>`, // html body
    }

    if(resp && resp.password === pass){
        let answer = {}
        switch(resp.role){
            case 1:
                Mailer(mailFormat)
                answer = {
                    message: 'Admin',
                    key: key,
                    token: createTokenAdmin(resp)
                }
                break;
            case 2:
                answer = {
                    message: 'User',
                    token: createToken(resp)
                }
                break;
            case 3:
                answer = {
                    message: 'Disabled'
                }
                break;
        }
        res.send(answer)
    }
    res.send({message: 'User or password are incorrect'});
}

export default login;