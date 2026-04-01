import React from 'react';
import { Trash2, ArrowRight,ShoppingCart } from 'lucide-react';

const CartContainer = ({ cart, onRemove, onCheckout }) => {
  if (cart.length === 0) {
    return (
      <div className="text-center py-24 bg-white rounded-[2.5rem] border border-dashed border-gray-200 max-w-4xl mx-auto px-6">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingCart className="text-slate-300" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-800">Your Cart is Empty</h3>
        <p className="text-slate-500 mt-2">Add some premium tools to see them here!</p>
      </div>
    );
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
      <div className="bg-white p-6 md:p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-slate-100/50">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-slate-900">Your Cart</h2>
          <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full font-bold text-sm">
            {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>
        
        <div className="space-y-6">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col md:flex-row md:items-center justify-between bg-white p-5 md:p-6 rounded-4xl border border-gray-100 hover:border-indigo-100 transition-all hover:shadow-md gap-6 group"
            >
        
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl text-3xl shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-800 leading-tight">{item.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#4f39f6] font-black text-lg">${item.price}</span>
                    <span className="text-slate-400 text-sm font-medium">/ {item.period}</span>
                  </div>
                </div>
              </div>

      
              <button 
                onClick={() => onRemove(item.id)}
                className="flex items-center justify-center gap-2 py-3 px-6 md:px-4 rounded-xl bg-rose-50 md:bg-transparent text-rose-500 font-bold text-sm hover:bg-rose-100 md:hover:bg-rose-50 transition-all active:scale-95 self-stretch md:self-auto"
              >
                <Trash2 size={16} />
                <span>Remove Item</span>
              </button>
            </div>
          ))}
        </div>


        <div className="mt-12 pt-8 border-t-2 border-dashed border-slate-50">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">Total Amount</p>
              {/* <p className="text-slate-500 text-sm">Including all taxes</p> */}
            </div>
            <span className="text-5xl font-black text-slate-900 tracking-tight">${totalPrice}</span>
          </div>
          
          <button 
            onClick={onCheckout}
            className="group relative w-full overflow-hidden rounded-2xl bg-[#4f39f6] h-20 text-white shadow-2xl shadow-indigo-200 transition-all active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-600 group-hover:opacity-90 transition-opacity" />
            <div className="relative flex items-center justify-center gap-3 text-xl font-black">
              Proceed To Checkout
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;