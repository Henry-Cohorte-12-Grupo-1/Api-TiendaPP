import express from "express";
import db from "../../models";



async function sellerPageProducts(req: express.Request, res: express.Response) {
  //busca un producto por id
  const username: string = req.params.userName;
  console.log('------->', username)
  try {
    const matchUser = await db.User.findOne({
      where: {
        username: username,
      },
    });

    console.log('------>', matchUser)

    const sellerId = matchUser.userId;

    const profile = await db.SellerProfile.findOne({
      where: { userId: sellerId }
    })

    const allImages: any = await db.SellerProfileImage.findAll({ where: { sellerProfileId: profile.sellerProfileId } })

    const result: any = { ...profile.dataValues, images: allImages }

    res.send(result);
  } catch (error: any) {
    return res.send(error.message);
  }
}

export default sellerPageProducts;
