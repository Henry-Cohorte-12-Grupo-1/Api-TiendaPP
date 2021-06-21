import db from "../../models";
import express, { Request, Response } from "express";
import { Role } from "../../interfaces/role";
import { Mailer } from "../mailer/nodeMailer";
import { IEmail } from "../../interfaces/mailer";
const { v4: uuidv4 } = require("uuid");

export async function userCreate(req: express.Request, res: express.Response) {
  const { firstName, lastName, email, pass, username } = req.body;

  let rUsername = await db.User.findOne({ where: { username: username } });
  let rEmail = await db.User.findOne({ where: { email: email } });
  let code: string = uuidv4();

  let emailObject: IEmail = {
    from: '"TiendApp" <henrytiendapp@gmail.com>', // sender address
    to: `${email}`, // list of receivers
    subject: "Welcome to Tiendapp", // Subject line
    text: `Welcome to Tiendapp`, // plain text body
    html: `<b>Congratulations ${firstName}! You're almost set to start using Tiendapp.
        Just click the button below to validate your email address.
        <b></b><a href="http://localhost:3000/validate?id=${code}">VALIDATE EMAIL</a> 
        <div><p>Account Details</p><p>Username: ${username}</p><p>Email: ${email}</p></div>`, // html body
  };
  try {
    if (rUsername === null) {
      if (rEmail === null) {
        await db.User.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: pass,
          username: username,
          role: Role.disabled,
          code: code,
          forcePassword: false,
        });

        // await db.User.addRole(userCreated[0],{roleId:2})

        // await User.addRole(userCreated[0])
      } else return res.send("email must be unique");
    } else return res.send("username must be unique");

    Mailer(emailObject);

    return res.send("successfully created");
  } catch (error: any) {
    console.log("caught", error.message);
  }
}
