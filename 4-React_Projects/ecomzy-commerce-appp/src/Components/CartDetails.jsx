import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/cartSlice';
import { toast } from 'react-hot-toast';
// import { FcDeleteDatabase } from "react-icons/fc";

export default function CartDetails({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success('Removed from cart');
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md">
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md" />
      </div>

      {/* Item Details */}
      <div className="flex flex-col flex-grow ml-4">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">${item.price}</p>
      </div>

      {/* Remove Button */}
      <div className="ml-4">
        <button
          onClick={removeFromCart}
          className="text-white bg-red-500 hover:bg-red-600 transition-colors px-4 py-2 rounded-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
