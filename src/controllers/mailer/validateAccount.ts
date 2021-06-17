import db from '../../models';
import express, { Request, Response } from 'express';
import { Role } from '../../interfaces/role'
import { resolveContent } from 'nodemailer/lib/shared';

const validateAccount = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    console.log(id)


    let resp = await db.User.update({ role: Role.user }, {
      where: {
        code: id
      }
    })

    if(resp[0]==1){

      res.send('verificado')
    } else {
      res.send('error')
    }


}


export default validateAccount;