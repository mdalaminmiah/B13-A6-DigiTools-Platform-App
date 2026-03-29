import React from 'react';

const Pricing = () => {
    const plans = [
        {
        name: "Starter",
        price: "0",
        description: "Perfect for getting started",
        features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
        buttonText: "Get Started Free",
        isPopular: false
        },
        {
        name: "Pro",
        price: "29",
        description: "Best for professionals",
        features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
        buttonText: "Start Pro Trial",
        isPopular: true
        },
        {
        name: "Enterprise",
        price: "99",
        description: "For teams and businesses",
        features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
        buttonText: "Contact Sales",
        isPopular: false
        }
    ];

    return (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mb-16">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
            <div 
                key={index}
                className={`relative p-10 rounded-[2.5rem] border transition-all duration-300 ${
                plan.isPopular 
                ? 'bg-indigo-600 text-white shadow-2xl scale-105 z-10 border-none' 
                : 'bg-white text-slate-900 border-gray-100 shadow-sm hover:shadow-lg'
                }`}
            >
                {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-600 px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                    Most Popular
                </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`${plan.isPopular ? 'text-indigo-100' : 'text-gray-500'} mb-6`}>{plan.description}</p>
                
                <div className="mb-8">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className={`text-lg font-medium ${plan.isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>/Month</span>
                </div>
                
                <ul className="space-y-4 mb-10 text-left">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                    <i className={`fa-solid fa-check ${plan.isPopular ? 'text-white' : 'text-green-500'}`}></i>
                    <span className="font-medium text-sm">{feature}</span>
                    </li>
                ))}
                </ul>
                
                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                plan.isPopular 
                ? 'bg-white text-indigo-600 hover:bg-gray-50' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}>
                {plan.buttonText}
                </button>
            </div>
            ))}
        </div>
        </div>
    </section>
    );
};

export default Pricing;