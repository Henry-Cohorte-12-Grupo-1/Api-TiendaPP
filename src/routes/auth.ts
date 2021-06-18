import { Router, Request, Response } from 'express'
import db from '../models';
import passport from 'passport';
import config from '../lib/config';

const passGoogleOARoutes = Router();

// routes de la GoogleOAuth

passGoogleOARoutes.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

passGoogleOARoutes.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');
  });


export default passGoogleOARoutes;