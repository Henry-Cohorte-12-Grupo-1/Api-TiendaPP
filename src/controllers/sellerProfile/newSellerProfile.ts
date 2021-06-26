import db from "../../models";
import express from "express";




async function newSellerProfile(
    req: express.Request,
    res: express.Response
) {
    //
    const { header, description, userId, images } = req.body
    try {

        // --> images [1, 2, 3, 4]
        // --> imges [2, 3, 5]

        const profile = await db.SellerProfile.findOne({ where: { userId: userId } })
        if (profile) {
            /*
            profile.header = header
            profile.description = description
            */
            db.SellerProfile.update({ header: header, description: description }, { where: { userId: userId } })

            const sellerProfileId = profile.sellerProfileId
            await db.SellerProfileImages.destroy({ where: { userId: userId } })
            if (images.length) {
                images.forEach(async (image: string) => await db.SellerProfileImages.create({ sellerProfileId: sellerProfileId, url: image }))
            }
            res.send(profile)
        } else {
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
        }






    } catch (error: any) {
        console.log("caught", error.message)
        return res.send(error.message);
    }
}

export default newSellerProfile;
