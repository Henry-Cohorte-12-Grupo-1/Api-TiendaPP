import express from "express";
import db from "../../models";


//export function

async function sellerController(req: express.Request, res: express.Response) {
  //busca un producto por id
  const username: string = req.params.userName;
  try {
    const matchUser = await db.User.findOne({
      where: {
        username: username,
      },
    });

    const sellerId = matchUser.userId;

    const result = await db.Profile.findAll({
      include: [
        {
          model: db.User,
          attributes: ["username"],
        },
        {
          model: db.Product,
          where: {
            userId: sellerId,
          },
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
      ],
    });
    res.send(result);
  } catch (error: any) {
    return res.send(error.message);
  }
}


export default sellerController;
