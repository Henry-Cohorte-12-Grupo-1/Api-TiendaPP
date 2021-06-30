import { Router, Request, Response } from "express";
import passport from "passport";
import config from "../lib/config";
const jwt = require("jsonwebtoken");

const passOARoutes = Router();

// routes de GoogleOAuth

passOARoutes.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

passOARoutes.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req: any, res: Response) {
    //console.log('DDDDDDDDDDDDD, Entro al callback de google')
    //res.send(jwt.sign({userId: req.userId}, 'secretkey', {expiresIn:'5 min'}))}
    return res.redirect(
      301,
      `http://tiendapp.servebeer.com/tokensignin?token=${jwt.sign(
        {
          id: req.user.userId,
          username: req.user.username,
          email: req.user.email,
          user: true,
        },
        config.JWT_SECRET,
        { expiresIn: 84600 }
      )}`
    );
  }
);

// routes de Twitter OAuth

passOARoutes.get("/twitter", passport.authenticate("twitter"));

passOARoutes.get("/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login", session: true }),
  function (req: any, res: Response) {
    console.log('CCCCCCCCCCCCCCCCCCC, Entro al callback de Twitter')
    res.redirect(
      301,
      `http://tiendapp.servebeer.com/tokensignin?token=${jwt.sign(
        {
          id: req.user.userId,
          username: req.user.username,
          email: req.user.email,
          user: true,
        },
        config.JWT_SECRET,
        { expiresIn: 84600 }
      )}`
    );
  });




  // routes de GitHub OAuth

passOARoutes.get("/github", passport.authenticate("github"));

passOARoutes.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login", session: true }),
  function (req: any, res: Response) {
    return res.redirect(
      301,
      `http://tiendapp.servebeer.com/tokensignin?token=${jwt.sign(
        {
          id: req.user.userId,
          username: req.user.username,
          email: req.user.email,
          user: true,
        },
        config.JWT_SECRET,
        { expiresIn: 84600 }
      )}`
    );
  }
);


export default passOARoutes;
