import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // Handle form submission to complete the payment
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      // Create a Payment Intent on your backend
      const { data } = await axios.post("http://localhost:5001/api/payment/create-payment-intent", {
        amount: totalAmount,
      });

      const clientSecret = data.clientSecret;

      // Confirm the card payment using the clientSecret
      const cardElement = elements.getElement(CardElement);
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        setLoading(false);
        navigate('/payment-failure');
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
        
          setLoading(false);
          navigate('/payment-success');
        }
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
      navigate('/payment-failure');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
    <CardElement className="p-2 border rounded mb-4 w-full" />
    {error && <p className="text-red-500">{error}</p>}
    <div className="flex justify-center w-full">
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  </form>
  );
};

export default CheckoutForm;
