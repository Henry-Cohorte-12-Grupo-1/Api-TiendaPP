import jwt from "jsonwebtoken";
import config from "../../lib/config";
import express, { Request, Response } from "express";

function createTokenAdmin() {
  return jwt.sign({ admin: true }, config.JWT_SECRET_ADMIN, {
    expiresIn: 86400,
  });
}
const verification = (req: Request, res: Response) => {
  // return res.send({token: createTokenAdmin()})
  if (!req.headers || !req.headers.hasOwnProperty('authorization')) return res.send('unauthorized').status(401);
  return res.send({ token: createTokenAdmin() });
};

export default verification;
