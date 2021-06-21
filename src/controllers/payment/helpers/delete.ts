import db from "../../../models";

async function deleteCart(userId: string) {
  try {
    await db.CartItem.destroy({
      where: {
        userId: userId,
      },
      force: true,
    });
  } catch (error: any) {
    console.log("caught", error.message);
  }

  return console.log("estoy en deleteCart");
}

export default deleteCart;
