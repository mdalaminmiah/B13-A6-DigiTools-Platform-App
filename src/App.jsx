import { useState } from 'react';
import './App.css'
import Hero from './components/homepage/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Stats from './components/stats/Stats'
import { toast, ToastContainer } from 'react-toastify';
import ToggleTabs from './components/homepage/toggle/ToggleTabs';
import ProductContainer from './components/Products/ProductContainer';
import CartContainer from './components/Cart/CartContainer';
import Steps from './components/homepage/getStarted/Steps';
import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';
import FinelFooter from './components/footer/FinelFooter';

function App() {
    // 1. Manage Global State
    const [activeTab, setActiveTab] = useState('products');
    const [cart, setCart] = useState([]);

    // 2. Logic Functions
    const handleAddToCart = (product) => {
        const isExist = cart.find(item => item.id === product.id);
        if (!isExist) {
        setCart([...cart, product]);
        toast.success(`${product.name} added to cart!`);
        } else {
        toast.error("Already in your cart!");
        }
    };

    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
        toast.warn("Item removed.");
    };

    const handleCheckout = () => {
        setCart([]);
        toast.info("Order placed successfully!");
        setActiveTab('products');
    };


  return (
    <>
      <div className="bg-slate-50 min-h-screen">
            {/* Notifications system */}
            <ToastContainer position="top-center" autoClose={1500} />
            
            {/* Fixed Layout Components */}
            <Navbar cartCount={cart.length} />
            <Hero />
            <Stats />

            {/* Toggling Section */}
            <ToggleTabs 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                cartCount={cart.length} 
            />

            {/* Main Content Area: Switches between Products & Cart */}
            <main className="max-w-7xl mx-auto px-6 pb-24">
                {activeTab === 'products' ? (
                    <>
                        {/* These two show up together when Products is active */}
                        <ProductContainer handleAddToCart={handleAddToCart} />
                        <Steps /> 
                        <Pricing/>
                    </>
                ) : (
                    /* This shows up alone when Cart is active */
                    <CartContainer 
                        cart={cart} 
                        onRemove={handleRemove} 
                        onCheckout={handleCheckout} 
                    />
                )}
            </main>

            {/* Footer / CTA Section */}
            <Footer />
            <FinelFooter/>
        </div>


      <ToastContainer/>
    </>
  )
}

export default App
