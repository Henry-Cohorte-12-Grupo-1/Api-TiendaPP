import { Router } from 'express';
import { addCartItem, getCart, setCartItemQuantity } from '../controllers/cart/cart';

const cart = Router();

//LPM!!!
//WARNING: THE ORDER MATTERS DUDE!
cart.use('/getCart', getCart);
cart.post('/setCartItemQuantity', setCartItemQuantity);
cart.use('/', addCartItem);

export default cart;
