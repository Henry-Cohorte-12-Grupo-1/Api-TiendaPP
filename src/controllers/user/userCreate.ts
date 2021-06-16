import db from '../../models';
import express, { Request, Response } from 'express';

export default function UserCreate (req: express.Request, res: express.Response){
    const { firstName, lastName, email, pass} = req.body;
    
    console.log(firstName, lastName, email, pass)

    res.send('OK')
}