import db from '../../models';
import express, { Request, Response } from 'express';
import {Role} from '../../interfaces/role' 

const validateAccount = async (req: express.Request, res: express.Response) => {
    const {id} = req.query;
    console.log(id)
    
    let resp = await db.User.update({ role: Role.user}, {
        where: {
          code: id
        }
      });

    // let resp = await db.User.findOne({ where: { code:id } })
      
      console.log(resp)
    res.send({resp})
}

export default validateAccount;