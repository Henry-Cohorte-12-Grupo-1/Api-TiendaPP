import express from "express";
import db from "../../models";
import { orders } from "../../seeders/order";

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
    return res.send(result);
  } catch (error: any) {
    return res.send(error.message);
  }
}

export const updateOrder = (req: express.Request, res: express.Response) => {
  const { id, status } = req.body;
  //console.log("entra a updateOrder")
  try {
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
    res.send("Product Updated");
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
