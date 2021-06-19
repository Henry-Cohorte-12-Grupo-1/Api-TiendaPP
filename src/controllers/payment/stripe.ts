import express from "express";
const stripe = require('stripe')('sk_test_51J3fLkDvBTztdzmK6XBuzSbrK3yfEhJnU7a5EW5Z3o9SIqiOllO1AhwSNXibk3lUpfMliyZlgRaTBVEHlBMLOih500DRaGrgX3');
//import stripe from "stripe";
export async function getController(req: express.Request, res: express.Response){

  const paymentIntent = await stripe.paymentIntents.create({
  amount: 10000,
  currency: 'ars',
  payment_method_types: ['card'],
  receipt_email: 'jenny.rosen@example.com',
});
  return res.send(paymentIntent);
}

export async function payController(req: express.Request, res: express.Response){
  const calculateOrderAmount = (items: any) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "ars"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });

}
