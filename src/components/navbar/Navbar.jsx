import React from 'react';
import { ShoppingCart } from 'lucide-react';
const Navbar = ({cartCount}) => {
    return (
    <div className="navbar bg-base-100 px-4 md:px-12 border-b border-gray-100 py-4">
      {/* Brand Logo */}
      <div className="flex-1">
        <a className="text-3xl font-bold text-indigo-600 cursor-pointer">DigiTools</a>
      </div>

      {/* Center Links (Visible on desktop) */}
      <div className="flex-none hidden lg:block mr-12">
        <ul className="menu menu-horizontal px-1 gap-8 text-gray-600 font-medium">
          <li><a className="hover:text-indigo-600">Products</a></li>
          <li><a className="hover:text-indigo-600">Features</a></li>
          <li><a className="hover:text-indigo-600">Pricing</a></li>
          <li><a className="hover:text-indigo-600">Testimonials</a></li>
          <li><a className="hover:text-indigo-600">FAQ</a></li>
        </ul>
      </div>

      {/* Right Actions */}
      <div className="flex-none gap-6 flex items-center">
        {/* Cart Icon - DaisyUI Indicator */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
            <ShoppingCart 
                    size={24} 
                    strokeWidth={2} 
                    className="text-slate-700" 
                />
              {/* Initially empty, so we hide the badge or set it to 0 */}
              <span className="badge badge-sm indicator-item bg-indigo-600 text-white border-none">{cartCount}</span>
            </div>
          </label>
        </div>

        {/* Login & Get Started */}
        <div className="flex items-center gap-4">
          <button className="btn btn-ghost normal-case text-gray-700 font-semibold">Login</button>
          <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-full px-8 normal-case font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
    );
};

export default Navbar;