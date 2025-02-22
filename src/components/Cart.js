import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseItem, clearCart } from "../utils/cartSlice";
import { IMAGE_URL } from "../utils/constants";
// 1) Import Stripe libraries
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import getStripe from "../utils/stripe";
import axios from "axios";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.card.info.price * item.quantity,
    0
  );
  const [showCheckout, setShowCheckout] = useState(false);
  const dispatch = useDispatch();
 
  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseItem(item.card.info.id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

   // Toggle the Stripe payment form
   const handleProceedToPayment = () => {
    setShowCheckout(true);
  };

  return (
    <div className="p-6 relative">
    <h1 className=" text-center py-2 text-3xl font-extrabold text-gray-800">
     { !showCheckout ? "Cart" : "Payment"} 
    </h1>
  {/* Clear Cart Button */}
    {cartItems.length !== 0 && !showCheckout &&(
      <button
        className="absolute top-8 right-8 text-white px-3 py-1 rounded-full text-sm font-semibold bg-red-500 hover:bg-red-700 transition-colors duration-300 shadow-md"
        onClick={handleClearCart}
      >
        Clear
      </button>
    )}

    {/* If user hasn't opened the Checkout form yet */}
    {!showCheckout && (
      <>
        {cartItems.length === 0 ? (
          <div className="text-center text-lg text-gray-500 mt-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-40 h-40 mx-auto mb-4 opacity-50"
            />
            <p>Cart is empty</p>
          </div>
        ) : (
          <ul className="space-y-6 mt-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="resturant-menu flex items-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 border border-gray-100"
              >
                <div className="resturantmenu-info flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.card.info.name}
                  </h3>
                  <p className="text-lg text-green-600 font-semibold">
                    ₹{(item.card.info.price / 100).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {item.card.info.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      className="bg-gray-300 text-gray-800 px-2 rounded-md hover:bg-gray-400 transition-colors"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      className="bg-gray-300 text-gray-800 px-2 rounded-md hover:bg-gray-400 transition-colors"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0 relative">
                  <img
                    src={`${IMAGE_URL}${item.card.info.imageId}`}
                    alt={item.card.info.name}
                    className="w-32 h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Payment Section */}
        {cartItems.length !== 0 && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">
              Total Amount: ₹{(totalAmount / 100).toFixed(2)}
            </h2>
            <button
              className="mt-4 w-full text-white px-4 py-2 rounded-md text-sm font-semibold bg-blue-500 hover:bg-blue-700 transition-colors duration-300 shadow-md"
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </>
    )}

    {/* If user clicked "Proceed to Payment", show the CheckoutForm */}
    {showCheckout && (
     <div className="my-10 p-6 h-auto bg-white rounded-lg shadow-lg max-w-lg mx-auto">
     <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Complete Payment</h2>
     {/* Wrap the form in <Elements> so Stripe can use it */}
     <Elements stripe={getStripe()}>
       <CheckoutForm totalAmount={totalAmount} />
     </Elements>
   </div>
    )}
  </div>
  );
};

export default Cart;
