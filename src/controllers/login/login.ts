import express, { Request, Response} from 'express'; 
import db from '../../models';
import crypto from 'crypto';

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