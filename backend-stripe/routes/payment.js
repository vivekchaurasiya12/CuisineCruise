// backend/routes/payment.js
import express from "express"
import dotenv from "dotenv";
import Stripe from 'stripe';


dotenv.config();


const paymentRouter = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

paymentRouter.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr',
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
});


export default paymentRouter;

