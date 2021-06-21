import express, { Request, Response } from "express";
import db from "../../models";
import { IEmail } from "../../interfaces/mailer";
import { Mailer } from "../mailer/nodeMailer";
import jwt from "jsonwebtoken";
import config from "../../lib/config";

function createToken(user: any) {
  return jwt.sign(
    { id: user.userId, username: user.username, email: user.email, user: true },
    config.JWT_SECRET,
    {
      expiresIn: 86400,
    }
  );
}

function createTokenVerification(user: any, key: number) {
  return jwt.sign(
    { id: user.userId, username: user.username, email: user.email, key: key },
    "key",
    {
      expiresIn: 86400,
    }
  );
}


export function addCartItem(userId: string, productId: string, quantity: number){
    db.CartItem.findOrCreate({where: {userId, productId}, defaults:{quantity: quantity}})
}

const login = async (req: express.Request, res: express.Response) => {
    const key = Math.floor(100000 + Math.random() * 900000);
    
    const { email, pass, cart }= req.body;


  const { email, pass } = req.body;
  // console.log(`email: ${email} pass: ${pass}`)
  const resp = await db.User.findOne({ where: { email: email } });
  // console.log('--------------------------------')
  // console.log(resp?.forcePassword);
  // console.log('--------------------------------')


    const resp = await db.User.findOne({ where: {email: email}})
    console.log('--------------------------------')
    console.log(resp);
    console.log('--------------------------------')
    console.log('CART IS', typeof cart, cart)
    

   
    // de guestCart a userCart
    if(cart.length != 0 && resp){
        cart.forEach((cartItem:any) => addCartItem(resp.userId,cartItem.productId, cartItem.quantity))
    }
    
   


    let mailFormat:IEmail = {      
            from: '"TiendApp" <tomygaar@gmail.com>', // sender address
            to: `${email}, tomasqgarcia@gmail.com`, // list of receivers
            subject: "Two-Steps Validation", // Subject line
            text: "Two-Steps Validation", // plain text body
            html: `<b>Welcome ${email}!</b>

            <p>Please use the following code to complete your two steps validation on TiendApp page:</p>
            <p>Your 6 digits key: ${key}<p>`, // html body
  };

  if (resp && resp.password === pass) {
    let answer = {};
    switch (resp.role) {
      case 1:
        Mailer(mailFormat);
        answer = {
          message: "Admin",
          key: key,
          token: createTokenVerification(resp, key),
        };
        break;
      case 2:
        answer = {
          message: "User",
          token: createToken(resp),
          reset: resp.forcePassword,
        };
        break;
      case 3:
        answer = {
          message: "Disabled",
        };
        break;
    }
    return res.send(answer);
  }
  return res.send({ message: "User or password are incorrect" });
};

export default login;
