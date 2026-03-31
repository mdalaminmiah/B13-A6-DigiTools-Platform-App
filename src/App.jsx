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
    const [activeTab, setActiveTab] = useState('products');
    const [cart, setCart] = useState([]);

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
            <Navbar cartCount={cart.length} />
            <Hero /> 
            <Stats />
            <ToggleTabs 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                cartCount={cart.length} 
            />
            <main className="max-w-7xl mx-auto px-6 pb-24">
                {activeTab === 'products' ? (
                    <>
                        <ProductContainer handleAddToCart={handleAddToCart} cart = {cart} toast={toast} />
                        <Steps /> 
                        <Pricing/>
                    </>
                ) : (
                    <CartContainer 
                        cart={cart} 
                        onRemove={handleRemove} 
                        onCheckout={handleCheckout} 
                    />
                )}
            </main>
            <Footer />
            <FinelFooter/>
        </div>

        <ToastContainer 
            position="top-right" 
            autoClose={2000} 
            pauseOnHover={false}
            pauseOnFocusLoss={false} 
            theme="light"
        />
    </>
  )
}

export default App
