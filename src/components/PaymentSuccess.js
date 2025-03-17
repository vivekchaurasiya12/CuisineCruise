
import React,{useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearCart } from "../utils/cartSlice";
const PaymentSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      // Clear the cart when the component is rendered
      dispatch(clearCart());
    }, [dispatch]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-12 rounded-lg shadow-md text-center w-96 h-96 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300" onClick={()=>{navigate('/')}}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;