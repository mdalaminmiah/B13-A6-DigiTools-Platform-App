import React from 'react';

const Footer = () => {
    return (
    <footer className="bg-linear-to-r from-indigo-500 to-purple-600 py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Ready To Transform Your Workflow?
        </h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter. 
            Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="btn bg-white text-indigo-600 hover:bg-gray-100 border-none px-10 h-16 rounded-full text-lg font-bold shadow-xl">
            Explore Products
            </button>
            <button className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-10 h-16 rounded-full text-lg font-bold">
            View Pricing
            </button>
        </div>
        <p className="text-indigo-200 text-sm font-medium">
            14-day free trial • No credit card required • Cancel anytime
        </p>
        </div>
    </footer>
    );

};

export default Footer;