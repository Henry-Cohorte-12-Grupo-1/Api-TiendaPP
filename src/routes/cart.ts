import { Router } from 'express';
import { addCartItem, getCart } from '../controllers/cart/cart';

const cart = Router();

//LPM!!!
//WARNING: THE ORDER MATTERS DUDE!
cart.use('/getCart', getCart);
cart.use('/', addCartItem);

export default cart;
