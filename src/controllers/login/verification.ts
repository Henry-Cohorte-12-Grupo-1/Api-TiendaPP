import jwt from "jsonwebtoken";
import config from "../../lib/config";
import express, { Request, Response } from "express";

function createTokenAdmin(id:string, username:string, email:string) {
  return jwt.sign({ id: id, username: username, email: email, admin: true }, config.JWT_SECRET_ADMIN, {
    expiresIn: 86400,
  });
}
const verification = (req: Request, res: Response) => {
  // return res.send({token: createTokenAdmin()})
  const {id, username, email} = req.body;
  if (!req.headers || !req.headers.hasOwnProperty('authorization')) return res.send('unauthorized').status(401);
  return res.send({ token: createTokenAdmin(id, username, email) });
};

export default verification;
