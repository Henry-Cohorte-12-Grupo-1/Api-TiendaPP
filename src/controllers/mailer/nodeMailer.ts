import { IEmail } from "../../interfaces/mailer";
import { EMAIL_KEY,EMAIL_USER } from "./config";

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
export async function Mailer(emailObject:IEmail) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: EMAIL_USER, // generated ethereal user
      pass: EMAIL_KEY, // generated ethereal password
    },
  });


  // send mail with defined transport object
  let info = await transporter.sendMail(emailObject);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}