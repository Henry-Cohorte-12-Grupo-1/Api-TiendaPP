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
    //res.send(jwt.sign({userId: req.userId}, 'secretkey', {expiresIn:'5 min'}))}
    return res.redirect(
      301,
      `http://localhost:3000/tokensignin?token=${jwt.sign(
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

passOARoutes.get("/logout", (req, res) => {
  req.logout();
  return res.send(req.user);
});

// routes de Twitter OAuth

passOARoutes.get("/twitter", passport.authenticate("twitter"));

passOARoutes.get("/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login", session: true }),
  function (req: any, res: Response) {
    res.redirect(
      301,
      `http://localhost:3000/tokensignin?token=${jwt.sign(
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


export default passOARoutes;
