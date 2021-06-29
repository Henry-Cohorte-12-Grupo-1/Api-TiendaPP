import express from "express";
import db from "../../models";
import { orders } from "../../seeders/order";
import { Mailer } from "../mailer/nodeMailer";
import { IEmail } from '../../interfaces/mailer'

async function ordersController(req: express.Request, res: express.Response) {
  //busca un producto por id
  const username: string = req.params.userName;
  try {
    const matchUser = await db.User.findOne({
      where: {
        username: username,
      },
    });

    const id = matchUser.userId;
    const userEmail = matchUser.email;
    const userName = matchUser.firstName

    const result = await db.Order.findAll({
      where: {
        userId: id,
      },
      include: {
        model: db.Product,
        include: [
          {
            model: db.Image,
          },
          {
            model: db.User,
            attributes: ["username"],
          },
          {
            model: db.Review,
          },
        ],
      },
    });
    return res.send(result)
  } catch (error: any) {
    return res.send(error.message);
  }
}

export const updateOrder = async (req: express.Request, res: express.Response) => {
  const { id, status } = req.body;
  //console.log("entra a updateOrder")
  try {
    const matchOrder = await db.Order.findOne({
      where: {
        id: id
      }
    })
    db.Order.update(
      {
        status: status,
      },
      {
        where: {
          id: id,
        },
      }
    );
    const matchUser = await db.User.findOne({
      where: {
        userId: matchOrder.userId
      }
    })

    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', matchUser.email)
    // res.send("Product Updated");
    const mail: IEmail = {
      from: '"TiendApp" <henrytiendapp@gmail.com>', // sender address
      to: `${matchUser.email}`, // list of receivers
      subject: "Your order has been updated", // Subject line
      text: "There´s been changes in your order's status", // plain text body
      html: `<b>Welcome ${matchUser.firstName.charAt(0).toUpperCase()+matchUser.firstName.slice(1)}!</b>
      
      <p>Please use the following code to complete your two steps validation on TiendApp page:</p>
      <p>Your order is now: <h3>${status}</h3><p>`, // html body
    }
    Mailer(mail)
    res.send(matchUser);
    
  } catch (error: any) {
    res.send(error.message);
  }
};

export const createDummyOrders = () => {
  try {
    orders.map(async (or) => {
      await db.Order.create(or);
    });
  } catch (error: any) {
    console.log("caught", error.message);
  }
};

export default ordersController;
