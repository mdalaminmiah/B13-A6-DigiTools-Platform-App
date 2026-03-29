import React from 'react';

const Stats = () => {
    return (
    <div className="px-6 md:px-12 lg:px-24 my-12 pb-8">
      <div className="bg-linear-to-r from-[#7C3AED] to-[#A855F7] rounded-3xl py-12 px-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-around text-white gap-8 md:gap-0">
          
          {/* Active Users */}
          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
            <p className="text-indigo-100 font-medium">Active Users</p>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden md:block h-16 w-[1px] bg-white/30"></div>

          {/* Premium Tools */}
          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
            <p className="text-indigo-100 font-medium">Premium Tools</p>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden md:block h-16 w-[1px] bg-white/30"></div>

          {/* Rating */}
          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
            <p className="text-indigo-100 font-medium">Rating</p>
          </div>

        </div>
      </div>
    </div>
    );
};

export default Stats;