import React from 'react';

const FinelFooter = () => {
    return (
        <footer className="bg-[#0b1120] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
            
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
                <p className="text-gray-400 leading-relaxed max-w-xs">
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                </p>
            </div>

            {/* Links Columns */}
            <div>
                <h3 className="font-bold mb-6">Product</h3>
                <ul className="space-y-4 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold mb-6">Company</h3>
                <ul className="space-y-4 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
                </ul>
            </div>

            <div>
                <h3 className="font-bold mb-6">Resources</h3>
                <ul className="space-y-4 text-gray-400">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
                </ul>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Cookies</span>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default FinelFooter;