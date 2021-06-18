import express, { Request, Response} from 'express'; 
import db from '../../models';
import crypto from 'crypto';
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

    const key = crypto.randomBytes(4).toString('hex');

    if(resp && resp.password === pass){
        let answer = {}
        switch(resp.role){
            case 1:
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