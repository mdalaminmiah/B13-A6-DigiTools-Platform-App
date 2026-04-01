import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
      <div className="max-w-360 mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <div className="flex-1 flex items-center">
          <div className="lg:hidden mr-2">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <Menu size={24} className="text-slate-700" />
              </label>
              <ul tabIndex={0} className="menu dropdown-content mt-4 z-50 p-4 shadow-xl bg-white rounded-2xl w-64 border border-gray-100">
                {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                  <li key={item}><a className="font-semibold text-slate-700">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <a className="text-2xl md:text-3xl font-black tracking-tight text-[#4f39f6] cursor-pointer">
            DigiTools
          </a>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-gray-500 font-medium text-[15px]">
            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
              <li key={item}>
                <a className="hover:text-[#4f39f6] transition-colors cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div className="flex-1 flex items-center justify-end gap-6 md:gap-10">
          <div className="flex items-center gap-8">

            <div className="relative cursor-pointer group">
              <ShoppingCart size={22} strokeWidth={2} className="text-slate-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2.5 -right-2.5 bg-[#4f39f6] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="hidden sm:block text-gray-600 font-semibold hover:text-black transition-colors text-[15px]">
              Login
            </button>
          </div>

          <button className="h-11 px-8 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold text-sm shadow-lg shadow-indigo-100 hover:opacity-90 transition-all active:scale-95">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;