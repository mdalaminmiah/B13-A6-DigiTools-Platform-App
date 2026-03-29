import React from 'react';
import { User , Box, Rocket } from 'lucide-react';
const Steps = () => {
// 1. Updated Data Structure with Lucide Components
    const stepsData = [
        {
            id: '01',
            Icon: User, // Pass the component itself, not a string
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started."
        },
        {
            id: '02',
            Icon: Box, 
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs."
        },
        {
            id: '03',
            Icon: Rocket, 
            title: "Start Creating",
            description: "Download and start using your premium tools immediately."
        }
    ];

    return (
        <section className="bg-slate-50/50 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-slate-900 mb-4">Get Started In 3 Steps</h2>
                    <p className="text-lg text-gray-500">Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {stepsData.map((step) => {
                        const { Icon } = step;
                        
                        return (
                            <div key={step.id} className="card bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative group">
                                <div className="absolute top-6 right-6 badge bg-indigo-600 border-none text-white font-bold h-9 w-9">
                                    {step.id}
                                </div>
                                
                                {/* 2. Render Lucide Icon with Tailwind classes */}
                                <div className="w-20 h-20 bg-indigo-50 flex items-center justify-center rounded-3xl mb-8 group-hover:bg-indigo-100 transition-colors">
                                    <Icon 
                                        size={36} 
                                        className="text-indigo-600 transition-transform group-hover:scale-110" 
                                        strokeWidth={1.5} 
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 mb-3 text-center">{step.title}</h3>
                                <p className="text-gray-500 text-sm text-center leading-relaxed">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Steps;