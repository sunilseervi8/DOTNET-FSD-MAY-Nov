import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cartitem from '../Components/CartDetails';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, item) => acc + item.price, 0)*84);
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-4">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <Cartitem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
              <h3 className="text-lg font-medium mb-2">Summary</h3>
              <p className="mb-4">
                <span className="text-gray-700">Total Items: {cart.length}</span>
              </p>

              <div className="border-t border-gray-200 py-4">
                <p className="text-xl font-bold">
                  Total Amount: INR:{totalAmount.toFixed(2)}
                </p>
              </div>

              <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4">
                Checkout Now
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-lg font-semibold mb-6">Your cart is empty</p>
            <Link to="/">
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
