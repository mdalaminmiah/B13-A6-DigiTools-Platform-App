import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductContainer = ({ handleAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching data from the public folder
        fetch('./products.json')
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load data");
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <span className="loading loading-spinner loading-lg text-indigo-600"></span>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    handleAddToCart={handleAddToCart} 
                />
            ))}
        </div>
    );
};

export default ProductContainer;