import { Router } from 'express';
import { addCartItem } from '../controllers/cart/cart';

const cart = Router();

//LPM!!!
//WARNING: THE ORDER MATTERS DUDE!
cart.use('/', addCartItem);

export default cart;
