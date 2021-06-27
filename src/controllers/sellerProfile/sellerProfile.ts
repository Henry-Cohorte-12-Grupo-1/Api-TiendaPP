import express from "express";
import db from "../../models";



async function sellerPageProducts(req: express.Request, res: express.Response) {

  const username: string = req.params.userName;
  try {
    const matchUser = await db.User.findOne({
      where: {
        username: username,
      },
    });

    const sellerId = matchUser.userId;

    const profile = await db.SellerProfile.findOne({
      where: { userId: sellerId }
    })
    if (profile) {
      const allImages: any = await db.SellerProfileImage.findAll({
        where: {
          sellerProfileId: profile.sellerProfileId
        }
      }).then((ims: any[]) => ims.map((i: any) => i.url));
      const result: any = { ...profile.dataValues, images: allImages }
      return res.send(result);
    }
    else return res.send({ error: "User has not made a page yet" })
  } catch (error: any) {
    return res.send(error.message);
  }
}

export default sellerPageProducts;
