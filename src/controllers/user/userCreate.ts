import db from "../../models";
import express, { Request, Response } from "express";
import { Role } from "../../interfaces/role";
import { Mailer } from "../mailer/nodeMailer";
import { IEmail } from "../../interfaces/mailer";
import { addCartItem } from "../login/login";
const { v4: uuidv4 } = require("uuid");

import { FRONT_URL } from "../../config/url";

export async function userCreate(req: express.Request, res: express.Response) {
    const { firstName, lastName, email, pass, username, localCart } = req.body;

    const rUsername = await db.User.findOne({ where: { username: username } });
    const rEmail = await db.User.findOne({ where: { email: email } });
    const code: string = uuidv4();

    const emailObject: IEmail = {
        from: '"TiendApp" <tomygaar@gmail.com>', // sender address
        to: `${email}, tomasqgarcia@gmail.com`, // list of receivers
        subject: "Welcome to Tiendapp", // Subject line
        text: `Welcome to Tiendapp`, // plain text body
        html: `<b>Congratulations ${firstName}! You're almost set to start using Tiendapp.
        Just click the button below to validate your email address.</b><a href="${FRONT_URL}/validate?id=${code}">VALIDATE EMAIL</a> 
        <div><p>Account Details</p><p>Username: ${username}</p><p>Email: ${email}</p><p>Name: ${firstName} ${lastName}</p></div>`, // html body
    };

    if (rUsername === null) {
        if (rEmail === null) {
            const userCreated = await db.User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: pass,
                username: username,
                role: Role.disabled,
                code: code,
            })
                .then(() => {
                    const newUserId = userCreated.userId;
                    localCart.forEach((cartItem: any) =>
                        addCartItem(
                            newUserId,
                            cartItem.productId,
                            cartItem.quantity
                        )
                    );
                })
                .catch((e: Object) => console.log(e));

            // await db.User.addRole(userCreated[0],{roleId:2})

            // await User.addRole(userCreated[0])
        } else res.send("email must be unique");
    } else res.send("username must be unique");

    Mailer(emailObject);

    res.send("successfully created");
}
