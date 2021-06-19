import jwt from 'jsonwebtoken';
import config from '../../lib/config';
import express, { Request, Response} from 'express'; 
import db from '../../models';

function createTokenAdmin() {
    return jwt.sign({ admin:true}, config.JWT_SECRET_ADMIN, {
      expiresIn: 86400
    });
}

const verification = (req:Request,res:Response) => {
    // return res.send({token: createTokenAdmin()})
    res.send({token: createTokenAdmin()})
}

export default verification;