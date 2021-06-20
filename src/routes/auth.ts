import { Router, Request, Response } from 'express'
import db from '../models';
import passport from 'passport';
import config from '../lib/config';
const jwt = require('jsonwebtoken');


const passGoogleOARoutes = Router();

// routes de la GoogleOAuth

passGoogleOARoutes.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

passGoogleOARoutes.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req: any, res: Response) {
    //res.send(jwt.sign({userId: req.userId}, 'secretkey', {expiresIn:'5 min'}))}
    res.redirect(301, `http://localhost:3000/tokensignin?token=${jwt.sign({id: req.user.userId, username: req.user.username, email: req.user.email, user: true}, config.JWT_SECRET, {expiresIn:84600})}`);
  });

  passGoogleOARoutes.get("/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });



export default passGoogleOARoutes;