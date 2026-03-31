import React from 'react';
import { User, Box, Rocket } from 'lucide-react';

const Steps = () => {
    const stepsData = [
        {
            id: '01',
            Icon: User,
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
        <section className="bg-white py-15 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-3">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stepsData.map((step) => {
                        const { Icon } = step;
                        
                        return (
                            <div key={step.id} className="relative flex flex-col items-center p-12 bg-white rounded-4xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] group">
                                <div className="absolute top-6 right-6 flex items-center justify-center h-8 w-8 bg-linear-to-r from-indigo-500 to-purple-600 text-white rounded-full text-xs font-bold shadow-lg shadow-indigo-100">
                                    {step.id}
                                </div>
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 bg-indigo-50/50 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                        <Icon 
                                            size={40} 
                                            className="text-indigo-600" 
                                            strokeWidth={1.5} 
                                        />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-70 mx-auto font-medium">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Steps;