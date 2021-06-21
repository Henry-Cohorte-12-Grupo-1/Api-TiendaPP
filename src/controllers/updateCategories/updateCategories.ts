import express from "express";
import db from "../../models";
import { CategoryAttributes } from "../../models/category";

// esta ruta recibe por body el siguiente json:
//{
//     "newCategories": "Verduras - Musica - Construccion",
//     "oldCategories": "Musica"
// }

const updateCategories = async (
  req: express.Request,
  res: express.Response
) => {
  const { newCategories, oldCategories } = req.body;

  const newCategoriesArr: CategoryAttributes[] =
    newCategories &&
    newCategories.split(" - ").map((c: CategoryAttributes[]) => {
      return { name: c };
    });
  const oldCategoriesArr: CategoryAttributes[] =
    oldCategories &&
    oldCategories.split(" - ").map((c: CategoryAttributes[]) => {
      return { name: c };
    });

  //recibe un array de strings con los nombres de las categorias
  //en ese array no deberian haber categorias repetidas
  try {
    newCategoriesArr &&
      newCategoriesArr.forEach(async (category: CategoryAttributes) => {
        await db.Category.findOrCreate({
          where: {
            name: category.name,
          },
        });
      });

    oldCategoriesArr &&
      oldCategoriesArr.forEach(async (category: CategoryAttributes) => {
        await db.Category.destroy({
          where: {
            name: category.name,
          },
        });
      });

    return res.send("ok");
  } catch (error: any) {
    console.log("caught", error.message);
  }
};

export default updateCategories;
