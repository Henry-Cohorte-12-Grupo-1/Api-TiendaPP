import db from "../../../models";

async function order(items: any, userId: any) {
  try {
    items.forEach(async (or: any) => {
      //console.log("--------->", or, "<---------");
      await db.Order.create({
        userId: userId,
        productId: or.productId,
        quantity: or.quantity,
        status: "processing",
      });
    });
  } catch (error: any) {
    console.log("caught", error.message);
  }
  return console.log("estoy en order");
}

export default order;
