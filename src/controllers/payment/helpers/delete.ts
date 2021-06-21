
import db from '../../../models'


// { userId: numero,
//   items: [] }



async function deleteCart(userId: string) {

    await db.CartItem.destroy({
        where: {
            userId: userId
        },
        force: true
    })

    return console.log("estoy en deleteCart")
}


export default deleteCart;