import React from 'react';

const Hero = () => {
    return (
    <div className="hero min-h-[80vh] bg-base-100 px-6 md:px-12 lg:px-24 pt-8 pb-8">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 p-0">
        
        {/* Right Side: Image */}
        <div className="flex-1">
          <img 
            src="https://i.ibb.co.com/ty1TgjY/banner.png" 
            className="w-full max-w-lg rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300" 
            alt="Digital Workflow Illustration"
          />
        </div>

        {/* Left Side: Content */}
        <div className="flex-1 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
            </span>
            <span className="text-sm font-semibold text-indigo-700">New: AI-Powered Tools Available</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Supercharge Your <br /> 
            <span className="text-indigo-600">Digital Workflow</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-500 max-w-md mb-8 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-full px-8 h-14 normal-case text-lg font-bold shadow-lg shadow-indigo-200">
              Explore Products
            </button>
            <button className="btn btn-outline border-indigo-200 hover:bg-indigo-50 hover:border-indigo-600 hover:text-indigo-600 rounded-full px-8 h-14 normal-case text-lg font-bold group">
              <i className="fa-regular fa-circle-play mr-2 text-indigo-600 group-hover:scale-110 transition-transform"></i>
              Watch Demo
            </button>
          </div>
        </div>

      </div>
    </div>
    );
};

export default Hero;