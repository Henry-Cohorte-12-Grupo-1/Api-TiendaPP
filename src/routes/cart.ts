import { Router } from 'express';
import { addCartItem, testSumAllPrices } from '../controllers/cart/cart';

const cart = Router();

//LPM!!!
//WARNING: THE ORDER MATTERS DUDE!
cart.use('/testSum', testSumAllPrices);
cart.use('/', addCartItem);

export default cart;
