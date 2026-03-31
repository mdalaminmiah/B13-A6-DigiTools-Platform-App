import React from 'react';
import { Play } from 'lucide-react';
const Hero = () => {
    return (
    <div className="hero min-h-[70vh] bg-base-100 px-6 md:px-12 lg:px-24 pt-8 pb-8">
      <div className="hero-content flex-col lg:flex-row gap-12 p-0">
            <div className="flex-1 text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                    <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-linear-to-r from-indigo-500 to-purple-600"></span>
                    </span>
                    <span className="text-sm font-semibold text-indigo-700">New: AI-Powered Tools Available</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                    Supercharge Your
                    Digital Workflow
                </h1>
                <p className="text-lg text-gray-500 max-w-md mb-8 leading-relaxed">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="btn bg-linear-to-r from-indigo-500 to-purple-600 hover:bg-indigo-700 text-white border-none rounded-full px-8 h-14 normal-case text-lg font-bold shadow-lg shadow-indigo-200">
                    Explore Products
                    </button>
                    <button className="btn btn-outline border-indigo-200 hover:bg-indigo-50 hover:border-indigo-600 hover:text-indigo-600 rounded-full px-8 h-14 normal-case text-lg font-bold group">
                    <Play 
                        size={16} 
                        className="mr-2 text-indigo-600 group-hover:scale-110 transition-transform" 
                        strokeWidth={2}
                    />
                    Watch Demo
                    </button>
                </div>
            </div>
            <div className="flex-1">
            <img 
                src="https://i.ibb.co.com/ty1TgjY/banner.png" 
                className="w-full max-w-lg rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300" 
                alt="Digital Workflow Illustration"
            />
            </div>
      </div>
    </div>
    );
};

export default Hero;