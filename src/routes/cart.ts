import { Router } from 'express';
import { addCartItem, getCart, deleteCartItems } from '../controllers/cart/cart';

const cart = Router();

//LPM!!!
//WARNING: THE ORDER MATTERS DUDE!

cart.use('/getCart', getCart);
cart.use('/deleteCartItem', deleteCartItems);
cart.use('/addCartItem', addCartItem);

export default cart;
