import React from 'react';
import { Check } from 'lucide-react';
const ProductCard = ({ product, handleAddToCart }) => {
    const { name, description, price, period, tag, tagType, features, icon } = product;

    return (
        <div className="card bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 relative flex flex-col h-full group">
        <div className="absolute top-6 right-6 z-10">
            <div className={`
                badge border-none font-black text-[10px] uppercase tracking-widest px-3 py-3 shadow-sm rounded-full
                ${tagType === 'warning' ? 'bg-amber-100 text-amber-700' : 
                tagType === 'secondary' ? 'bg-purple-100 text-purple-700' :
                tagType === 'success' ? 'bg-emerald-100 text-emerald-700' : 
                tagType === 'primary' ? 'bg-blue-100 text-blue-700' : 
                'bg-slate-100 text-slate-600'}  
            `}>
                {tag}
            </div>
        </div>
            <div className="w-16 h-16 bg-indigo-50 flex items-center justify-center rounded-2xl text-4xl mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-2">{name}</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed grow">
                {description}
            </p>
            <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">${price}</span>
                <span className="text-gray-400 font-semibold text-lg">/{period}</span>
            </div>
            <ul className="space-y-3 mb-8">
                {features?.map((feature, index) => (
                    <li key={feature.id || index} className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                        <Check size={16} className="text-emerald-500" strokeWidth={3} />
                        {typeof feature === 'object' ? feature.text : feature}
                    </li>
                ))}
            </ul>
            <button 
                onClick={() => handleAddToCart(product)}
                className="btn bg-linear-to-r from-indigo-500 to-purple-600 hover:bg-indigo-700 text-white border-none w-full rounded-2xl h-14 text-lg font-bold shadow-lg shadow-indigo-100 active:scale-95 transition-all"
            >
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;