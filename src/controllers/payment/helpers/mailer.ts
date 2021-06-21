import express from "express";
import { Mailer } from "../../mailer/nodeMailer"
import { IEmail } from "../../../interfaces/mailer"

async function mailer() {
    //   let emailObject: IEmail = {
    //     from: '"TiendApp" <henrytiendapp@gmail.com>', // sender address
    //     to: `${email}, tomasqgarcia@gmail.com`, // list of receivers
    //     subject: "Succesfull payment to Tiendapp", // Subject line
    //     text: `Succesfull payment to Tiendapp`, // plain text body
    //     html: `<b>Congratulations ${firstName}! You're almost set to start using Tiendapp.
    //         Just click the button below to validate your email address.
    //         `, // html body
    //   }
    //   Mailer(emailObject)
    return console.log("estoy en mailer")
}


export default mailer;