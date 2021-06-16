// archivo para probar passport 

import { Router, Request, Response } from 'express'
import db from '../models';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const passportRoutes = Router();

// pasar el campo de rol para verificar si es admin o no

function createToken(user:any) {
    return jwt.sign({ username: user.username, email: user.email }, 'Clave_secreta', {
      expiresIn: 86400
    });
  }

passportRoutes.post('/register', async (req : Request, res:Response) => { 
    if (!req.body.username || !req.body.password || !req.body.email || !req.body.firstName || ! req.body.lastName) return res.send('no se mandaron los parametros'); 

    // verificar si ya existe el usuario
    const userExist = await db.User.findOne({where: {username: req.body.username}})
    if (userExist) return res.send('El usuario ya existe');

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const createUser = await db.User.create({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }) 
    res.send('Usuario creado');
});

passportRoutes.post('/login', async (req: Request, res: Response, next) => {
    if (!req.body.email || !req.body.password) {
        return res
          .status(400)
          .json({ msg: "Please. Send your email and password" });
      }
    
      const user = await db.User.findOne({where:{ email: req.body.email }});
      if (!user) {
        return res.status(400).json({ msg: "The User does not exists" });
      }
    
      if ( await bcrypt.compare(req.body.password, user.password)) {
          return res.status(200).json({ accessToken: createToken(user) });
      }
      return res.status(400).json({
        msg: "The email or password are incorrect"
      });
    
})

passportRoutes.get('/logout', (req:Request, res:Response) => {
    req.logout();
    res.send('Successfully logout');
})
  


// para poder leer eso, en el header agregar Header:Authorization, Value: Bearer token (sin las dobles comillas)
passportRoutes.get('/test', passport.authenticate('jwt', {session:false}), (req, res) => {
    res.send('si lees esto, estas autenticado')
})

export default passportRoutes;