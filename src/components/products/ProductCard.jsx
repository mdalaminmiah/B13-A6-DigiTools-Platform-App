import React, { useState } from 'react';
import { Check, CheckCircle2 } from 'lucide-react';
import { toast } from 'react-toastify';

const ProductCard = ({ product, handleAddToCart, cart }) => {
    const { name, description, price, period, tag, tagType, features, icon } = product;
    
    // Keeping your exact state names
    const [isAdded, setIsAdded] = useState(false);
    const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);

    // This constant checks if the item is physically in the cart array
    const isInCart = cart?.some(item => item.id === product.id);

    const onButtonClick = () => {
        // 1. Logic for NEW addition
        if (!isInCart) {
            handleAddToCart(product);
            setIsAdded(true);
            
            // Show "Added to Cart!" for 2 seconds
            setTimeout(() => {
                setIsAdded(false);
            }, 2000);
        } 
        // 2. Logic for item ALREADY in cart
        else {
            toast.error("Already in your cart!");
            setIsAlreadyAdded(true);
            
            // Show "Already in cart" for 2 seconds
            setTimeout(() => {
                setIsAlreadyAdded(false);
            }, 2000);
        }
    };

    return (
        <div className="card bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 relative flex flex-col h-full group">
            {/* Badge */}
            <div className="absolute top-6 right-6 z-10">
                <div className={`badge border-none font-black text-[10px] uppercase tracking-widest px-3 py-3 shadow-sm rounded-full
                    ${tagType === 'warning' ? 'bg-amber-100 text-amber-700' : 
                      tagType === 'secondary' ? 'bg-purple-100 text-purple-700' :
                      tagType === 'success' ? 'bg-emerald-100 text-emerald-700' : 
                      'bg-slate-100 text-slate-600'}`}>
                    {tag}
                </div>
            </div>

            {/* Icon & Content */}
            <div className="w-16 h-16 bg-indigo-50 flex items-center justify-center rounded-2xl text-4xl mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-2">{name}</h3>
            <p className="grow text-gray-500 text-sm mb-6 leading-relaxed">{description}</p>

            {/* Price */}
            <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">${price}</span>
                <span className="text-gray-400 font-semibold text-lg">/{period}</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {features?.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                        <Check size={16} className="text-emerald-500" strokeWidth={3} />
                        {typeof f === 'object' ? f.text : f}
                    </li>
                ))}
            </ul>

            {/* STICKY ACTION BUTTON */}
            <button 
                onClick={onButtonClick}
                className={`btn w-full rounded-2xl h-14 text-lg font-bold shadow-lg transition-all active:scale-95 border-none
                    ${isInCart 
                        ? 'bg-emerald-500 text-white shadow-emerald-100' 
                        : 'bg-linear-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white shadow-indigo-100'
                    }`}
            >
                {isAdded ? (
                    <span className="flex items-center gap-2 animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 size={22} />
                        Added to Cart!
                    </span>
                ) : isAlreadyAdded ? (
                    <span className="flex items-center gap-2 animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 size={22} />
                        Already in cart
                    </span>
                ) : isInCart ? (
                    <span className="flex items-center gap-2">
                        <CheckCircle2 size={22} />
                        In Cart
                    </span>
                ) : (
                    "Buy Now"
                )}
            </button>
        </div>
    );
};

export default ProductCard;