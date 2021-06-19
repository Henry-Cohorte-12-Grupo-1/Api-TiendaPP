import { Router, Request, Response } from 'express'
import db from '../models';
import passport from 'passport';
import config from '../lib/config';


const passGoogleOARoutes = Router();

// routes de la GoogleOAuth

passGoogleOARoutes.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

passGoogleOARoutes.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req: Request, res: Response) {
    res.send(req.user)}
  );

  passGoogleOARoutes.get("/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });



export default passGoogleOARoutes;