
import React from 'react';
import { useNavigate } from "react-router-dom";
const PaymentFailure = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-12 rounded-lg shadow-md text-center w-96 h-96 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-lg text-gray-700 mb-6">
          Unfortunately, your payment could not be processed. Please try again or contact support.
        </p>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
          onClick={() => { navigate('/cart'); }}
        >
          Retry Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentFailure;