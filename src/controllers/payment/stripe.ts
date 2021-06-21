import express from "express";
const stripe = require("stripe")(
  "sk_test_51J3fLkDvBTztdzmK6XBuzSbrK3yfEhJnU7a5EW5Z3o9SIqiOllO1AhwSNXibk3lUpfMliyZlgRaTBVEHlBMLOih500DRaGrgX3"
);

export async function getController(
  req: express.Request,
  res: express.Response
) {
  //return res.status(400).send("Se rompió todo")
  return res.status(400).send("Get a Stripe");
  // Lookup the payment methods available for the customer
  console.log("le query", req.query);
  try {
    const customerId = req.query.customer;
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: "card",
    });
    // Charge the customer and payment method immediately
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "ars",
      customer: customerId,
      payment_method: paymentMethods.data[0].id,
      off_session: true,
      confirm: true,
    });
    if (paymentIntent.status === "succeeded") {
      return res.send("✅ Successfully charged card off session");
    } else {
      return res.status(400).send("Se rompió todo");
    }
  } catch (error: any) {
    console.log("caught", error.message);
  }
}

export async function payController(
  req: express.Request,
  res: express.Response
) {
  const OrderAmount = parseInt(req.body.mount);
  // Alternatively, set up a webhook to listen for the payment_intent.succeeded event
  // and attach the PaymentMethod to a new Customer
  try {
    const customer = await stripe.customers.create();
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer.id,
      setup_future_usage: "off_session",
      amount: OrderAmount,
      currency: "ars",
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.log("caught", error.message);
  }
}
