import db from "../../../models";
async function stock(items: any[]) {
    try {
        items.forEach(async item => await db.Product.decrement('quantity', { by: item.quantity, where: { productId: item.productId } }))


    } catch (error: any) {
        console.log(error.message)
    }
}


export default stock;


