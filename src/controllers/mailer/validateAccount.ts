import db from '../../models';
import express, { Request, Response } from 'express';
import {Role} from '../../interfaces/role' 

const validateAccount = async (req: express.Request, res: express.Response) => {
    const id = req.query;
    console.log(id)

    let resp = await db.Users.update({ role: Role.user}, {
        where: {
          code: id
        }
      });

    res.send({resp})
}

export default validateAccount;