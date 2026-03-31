import React from 'react';

const ToggleTabs = ({ activeTab, setActiveTab, cartCount }) => {
    return (
<section className="text-center my-16 px-4 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-2">
        Premium Digital Tools
      </h2>
      <p className="text-gray-500 mb-10 max-w-md mx-auto">
       Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>

      <div className="inline-flex items-center bg-white p-1.5 rounded-full border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
        <button 
          onClick={() => setActiveTab('products')}
          className={`relative px-10 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 
            ${activeTab === 'products' 
              ? 'bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105' 
              : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
        >
          <i className="fa-solid fa-boxes-stacked text-sm"></i>
          Products
        </button>

        <button 
          onClick={() => setActiveTab('cart')}
          className={`relative px-10 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 
            ${activeTab === 'cart' 
              ? 'bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105' 
              : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
        >
          <i className="fa-solid fa-cart-shopping text-sm"></i>
          Cart 
          <span className={`px-2 py-0.5 rounded-full text-xs transition-colors
            ${activeTab === 'cart' ? 'bg-white text-indigo-600' : 'bg-gray-200 text-gray-600'}`}>
            ({cartCount})
          </span>
        </button>

      </div>
    </section>
    );
};

export default ToggleTabs;