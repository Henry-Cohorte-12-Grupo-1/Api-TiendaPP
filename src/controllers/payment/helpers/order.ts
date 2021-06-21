import db from "../../../models";

async function order(items: any, userId: any) {
    items.forEach(async (or: any) => {
        console.log("--------->", or, "<---------")
        await db.Order.create({
            userId: userId,
            productId: or.productId,
            quantity: or.quantity,
            status: "processing"
        })
    });
    return console.log("estoy en order")
}


export default order;