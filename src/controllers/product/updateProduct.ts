import { Request, Response } from "express";
import db from "../../models";

export async function updateProduct(req: Request, res: Response) {
  let {
    name,
    description,
    price,
    categoryId,
    joinedImage,
    initialImages,
    quantity,
    productId,
  } = req.body;

  const newImagesArr: string[] =
    joinedImage &&
    joinedImage.split(" - ").map((c: any[]) => {
      return { name: c };
    });
  const oldImagesArr: string[] =
    initialImages &&
    initialImages.split(" - ").map((c: any[]) => {
      return { name: c };
    });

  //console.log("ELIMINAR", oldImagesArr);
  //console.log("GUARDAR", newImagesArr);

  try {
    await db.Product.update(
      {
        name: name,
        price: price,
        quantity: quantity,
        categoryId: categoryId,
        description: description,
      },
      { where: { productId: productId } }
    );

    oldImagesArr &&
      oldImagesArr.forEach(async (i: any) => {
        await db.Image.destroy({
          where: {
            imageId: i.name,
          },
        });
      });
    newImagesArr &&
      newImagesArr.forEach(async (i: any) => {
        await db.Image.create({
          imageId: i.name,
          productId: productId,
        });
      });

    return res.send(productId);
  } catch (error: any) {
    console.log("caught", error.message);
  }
}
