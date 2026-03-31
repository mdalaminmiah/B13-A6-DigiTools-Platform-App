import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-base-100 px-4 md:px-12 border-b border-gray-100 py-4 sticky top-0 z-50">
    {/* UPDATED MOBILE MENU (Left Side) */}
    <div className="flex-none lg:hidden">
    <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle group">
        {/* Animated Hamburger Icon */}
        <Menu size={28} className="text-slate-700 group-hover:text-indigo-600 transition-colors" />
        </label>
        
        {/* Dropdown Content with Animation */}
        <ul tabIndex={0} className="menu menu-lg dropdown-content mt-4 z-50 p-6 shadow-2xl bg-white/95 backdrop-blur-lg rounded-3xl w-72 border border-indigo-100 animate-in fade-in zoom-in duration-200">
        
        {/* Menu Links with Gradient Hover */}
        {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
            <li key={item}>
            <a className="py-3 text-lg font-bold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300">
                {item}
            </a>
            </li>
        ))}
        
        <div className="divider my-2 opacity-20"></div>
        
        {/* Mobile Login Button */}
        <li>
            <a className="py-3 text-lg font-bold text-indigo-600 bg-indigo-50 rounded-xl justify-center">
            Login
            </a>
        </li>
        </ul>
    </div>
    </div>

      {/* LOGO */}
      <div className="flex-1">
        <a className="text-2xl md:text-3xl cursor-pointer bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-black tracking-tight ml-2 lg:ml-0">
          DigiTools
        </a>
      </div>

      {/* DESKTOP MENU (Center) */}
      <div className="flex-none hidden lg:block mr-8">
        <ul className="menu menu-horizontal px-1 gap-6 xl:gap-8 text-gray-600 font-medium">
          <li><a className="hover:text-indigo-600 transition-colors">Products</a></li>
          <li><a className="hover:text-indigo-600 transition-colors">Features</a></li>
          <li><a className="hover:text-indigo-600 transition-colors">Pricing</a></li>
          <li><a className="hover:text-indigo-600 transition-colors">Testimonials</a></li>
          <li><a className="hover:text-indigo-600 transition-colors">FAQ</a></li>
        </ul>
      </div>

      {/* RIGHT SECTION: Cart & Buttons */}
      <div className="flex-none gap-2 md:gap-6 flex items-center">
        {/* Cart Icon */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart size={24} strokeWidth={2} className="text-slate-700" />
              <span className="badge badge-sm indicator-item bg-linear-to-r from-indigo-500 to-purple-600 text-white border-none">
                {cartCount}
              </span>
            </div>
          </label>
        </div>

        {/* Action Buttons (Login hidden on mobile, shown on Tablet/Desktop) */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="btn btn-ghost hidden sm:flex normal-case text-gray-700 font-semibold hover:bg-slate-50">
            Login
          </button>
          <button className="btn btn-sm md:btn-md bg-linear-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white border-none rounded-full px-4 md:px-8 normal-case font-bold shadow-md transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;