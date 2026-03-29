import React from 'react';

const Steps = () => {
// 1. Data Structure for the Steps
    const stepsData = [
        {
            id: '01',
            icon: "fa-solid fa-user-plus", // Font Awesome Icon
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started."
        },
        {
            id: '02',
            icon: "fa-solid fa-cube", // Font Awesome Icon
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs."
        },
        {
            id: '03',
            icon: "fa-solid fa-rocket", // Font Awesome Icon
            title: "Start Creating",
            description: "Download and start using your premium tools immediately."
        }
    ];

    return (
        <section className="bg-slate-50/50 py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                
                {/* --- Section Header (Centered) --- */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-lg text-gray-500 font-medium">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                {/* --- Steps Grid (3 Columns) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {stepsData.map((step) => (
                        <div 
                            key={step.id} 
                            className="card bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group"
                        >
                            
                            {/* 2. Step Number (Positioned Top Right) */}
                            <div className="absolute top-6 right-6 badge badge-lg bg-indigo-600 border-none text-white font-bold h-9 w-9 p-0 flex items-center justify-center text-sm shadow-md transition-transform group-hover:scale-110">
                                {step.id}
                            </div>
                            
                            {/* 3. Icon Wrapper (Centered, Light Background) */}
                            <div className="w-20 h-20 bg-indigo-50 flex items-center justify-center rounded-3xl text-4xl mb-8 group-hover:bg-indigo-100 transition-colors">
                                <i className={`${step.icon} text-indigo-600 group-hover:scale-110 transition-transform`}></i>
                            </div>

                            {/* 4. Text Content (Centered, Bold Headings) */}
                            <h3 className="text-2xl font-bold text-slate-800 mb-3 text-center">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed text-center font-medium max-w-sm mx-auto flex-grow">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Steps;