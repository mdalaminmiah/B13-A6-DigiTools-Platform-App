import React from 'react';

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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
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