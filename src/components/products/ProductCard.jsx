import React from 'react';

const ProductCard = ({ product, handleAddToCart }) => {
    const { name, description, price, period, tag, tagType, features, icon } = product;

    return (
        <div className="card bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 relative flex flex-col h-full group">
            
            {/* Tag Badge */}
            <div className={`absolute top-6 right-6 badge badge-${tagType} border-none font-bold px-4 py-3 shadow-sm`}>
                {tag}
            </div>
            
            {/* Icon */}
            <div className="w-16 h-16 bg-indigo-50 flex items-center justify-center rounded-2xl text-4xl mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-extrabold text-slate-800 mb-2">{name}</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                {description}
            </p>
            
            {/* Pricing */}
            <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">${price}</span>
                <span className="text-gray-400 font-semibold text-lg">/{period}</span>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                        <div className="bg-green-100 p-0.5 rounded-full">
                            <i className="fa-solid fa-check text-[10px] text-green-600"></i>
                        </div>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Action Button */}
            <button 
                onClick={() => handleAddToCart(product)}
                className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none w-full rounded-2xl h-14 text-lg font-bold shadow-lg shadow-indigo-100 active:scale-95 transition-all"
            >
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;