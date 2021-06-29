import express from "express";
import db from "../../models";

async function productDetailsController(
  req: express.Request,
  res: express.Response
) {
  //busca un producto por id
  const id: string = req.params.productId;
  try {
    const result = await db.Product.findOne({
      where: {
        productId: id,
      },
      include: [
        {
          model: db.Review,
          attributes: ["score", "review"],
          include: {
            model: db.User,
            attributes: ["username"],
          },
        },
        {
          model: db.Image,
          attributes: ["imageId"],
        },
        {
          model: db.User,
          attributes: ["username"]
        },
      ],
    });
    
 
    return res.send(result);
  } catch (error: any) {
    return res.send(error.message);
  }
}

export default productDetailsController;
