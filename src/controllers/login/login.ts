import express, { Request, Response} from 'express'; 
import db from '../../models';
import crypto from 'crypto';
import { IEmail } from '../../interfaces/mailer';
import {Mailer} from '../mailer/nodeMailer'

const login = async (req: express.Request, res: express.Response) => {
    const { email, pass }= req.body;
    console.log(`email: ${email} pass: ${pass}`)

    const resp = await db.User.findOne({ where: {email: email}})
    console.log('--------------------------------')
    console.log(resp);
    console.log('--------------------------------')

    const key = crypto.randomBytes(4).toString('hex');


    let mailFormat:IEmail = {      
            from: '"TiendApp" <tomygaar@gmail.com>', // sender address
            to: `${email}, tomasqgarcia@gmail.com`, // list of receivers
            subject: "Two-Steps Validation", // Subject line
            text: "Two-Steps Validation", // plain text body
            html: `<b>Welcome ${email}!.</b>
            <p>Please use the following code to complete your two steps validation on TiendApp page:
            Your 6 digits key: ${key}
            Just click the button below to validate your email address.</p>`, // html body
    }

    if(resp && resp.password === pass){
        let answer = {}
        switch(resp.role){
            case 1:
                Mailer(mailFormat)
                answer = {
                    message: 'Admin',
                    key: key
                }
                break;
            case 2:
                answer = {
                    message: 'User',
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