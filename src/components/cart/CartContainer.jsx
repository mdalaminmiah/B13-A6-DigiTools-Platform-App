import React from 'react';

const CartContainer = ({ cart, onRemove, onCheckout }) => {
  // Empty State Logic
  if (cart.length === 0) {
    return (
      <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-400">Your Cart is Empty</h3>
        <p className="text-gray-400 mt-2">Add some premium tools to see them here!</p>
      </div>
    );
  }

  // Calculate Total Price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Your Cart</h2>

        {/* Cart Items List */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between bg-slate-50/50 p-6 rounded-2xl border border-gray-50 transition-all hover:bg-slate-50"
            >
              <div className="flex items-center gap-6">
                {/* Product Icon */}
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-xl text-3xl shadow-sm">
                  {item.icon}
                </div>
                {/* Name & Price */}
                <div>
                  <h4 className="font-bold text-xl text-slate-800">{item.name}</h4>
                  <p className="text-gray-500 font-medium text-lg">${item.price}</p>
                </div>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => onRemove(item.id)}
                className="text-pink-500 font-bold hover:text-pink-700 transition-colors px-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center mb-10">
            <span className="text-gray-500 text-xl font-medium">Total:</span>
            <span className="text-4xl font-black text-slate-900">${totalPrice}</span>
          </div>

          {/* Large Action Button */}
          <button 
            onClick={onCheckout}
            className="btn bg-linear-to-r from-indigo-500 to-purple-600 hover:bg-indigo-700 text-white border-none w-full rounded-2xl h-16 text-xl font-bold shadow-lg shadow-indigo-100 normal-case"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;