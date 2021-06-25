import db from "../../models";
import express from "express";




async function newSellerProfile(
    req: express.Request,
    res: express.Response
) {
    //
    const { header, description, userId, images } = req.body
    try {
        const newProfile = await db.SellerProfile.create({
            header: header,
            description: description,
            userId: userId
        })

        if (images.length) {
            images.forEach((image: any) => db.SellerProfileImage.create({
                url: image,
                sellerProfileId: newProfile.sellerProfileId
            }))
        }
        res.send(newProfile)
    } catch (error: any) {
        console.log("caught", error.message)
        return res.send(error.message);
    }
}

export default newSellerProfile;
