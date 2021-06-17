const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
export async function Mailer(firstName:string,lastName:string,email:string,username:string,code:string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'tomygaar@gmail.com', // generated ethereal user
      pass: 'wymbiiijxwypnlbp', // generated ethereal password
    },
  });


  // send mail with defined transport object
  console.log(email)
  let info = await transporter.sendMail({      
    from: '"TiendApp" <tomygaar@gmail.com>', // sender address
    to: `${email}, tomasqgarcia@gmail.com`, // list of receivers
    subject: "Welcome to Tiendapp", // Subject line
    text: `Welcome to Tiendapp`, // plain text body
    html: `<b>Congratulations ${firstName}! You're almost set to start using Tiendapp.
    Just click the button below to validate your email address.</b><a href="http://localhost:3000/validate?id=${code}">VALIDATE EMAIL</a> 
    <div><p>Account Details</p><p>Username: ${username}</p><p>Email: ${email}</p><p>Name: ${firstName} ${lastName}</p></div>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}