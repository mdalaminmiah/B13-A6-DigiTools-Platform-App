import React from 'react';

const FinelFooter = () => {
    return (
        <footer className="bg-[#0b1120] text-white pt-20 pb-10 px-6 border-t-8 border-[#8B2CF5]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 w-full text-center lg:text-left">
                    
                    <div className="sm:col-span-2 lg:col-span-2 flex flex-col items-center lg:items-start space-y-6">
                        <div className="bg-linear-to-r from-indigo-500 to-purple-600 p-2 rounded-xl inline-block shadow-2xl">
                            <h2 className="text-3xl font-black text-white px-2">DigiTools</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm text-lg font-medium">
                            Premium digital tools for creators and businesses. 
                            Built for the next generation of innovators.
                        </p>
                    </div>

                 
                    {[
                        { title: "Product", links: ["Features", "Pricing", "Templates", "Integrations"] },
                        { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
                        { title: "Resources", links: ["Docs", "Help", "Community", "Contact"] }
                    ].map((group, i) => (
                        <div key={i} className="flex flex-col items-center lg:items-start animate-fade-in-up">
                            <h3 className="text-white font-extrabold text-xl mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 lg:after:left-0 after:-translate-x-1/2 lg:after:translate-x-0 after:w-8 after:h-1 after:bg-indigo-500">
                                {group.title}
                            </h3>
                            <ul className="space-y-4 text-gray-400">
                                {group.links.map(link => (
                                    <li key={link} className="hover:text-indigo-400 hover:translate-x-1 transition-all duration-300 cursor-pointer text-base">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                   
                    <div className="flex flex-col items-center lg:items-start space-y-6">
                        <h3 className="text-white font-extrabold text-xl tracking-tight">Social Links</h3>
                        
                        <div className="flex gap-5">
                            <div className="tooltip tooltip-bottom" data-tip="Instagram">
                                <button className="btn btn-circle bg-white border-none shadow-lg 
                                                transition-all duration-500 ease-in-out
                                                hover:bg-linear-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]
                                                hover:scale-125 hover:rotate-12 group">
                                    <img 
                                        src="https://i.ibb.co.com/HLKPFwNk/Instagram.png" 
                                        alt="Instagram icon" 
                                        className="w-5 h-5 transition-all duration-300 group-hover:invert group-hover:brightness-200" 
                                    />
                                </button>
                            </div>
                            <div className="tooltip tooltip-bottom" data-tip="Facebook">
                                <button className="btn btn-circle bg-white border-none shadow-lg 
                                                transition-all duration-500 ease-in-out
                                                hover:bg-[#1877F2]
                                                hover:scale-125 hover:-rotate-12 group">
                                    <img 
                                        src="https://i.ibb.co.com/0p49QbRD/Facebook.png" 
                                        alt="Facebook icon" 
                                        className="w-5 h-5 transition-all duration-300 group-hover:invert group-hover:brightness-200" 
                                    />
                                </button>
                            </div>

                            <div className="tooltip tooltip-bottom" data-tip="Twitter">
                                <button className="btn btn-circle bg-white border-none shadow-lg 
                                                transition-all duration-500 ease-in-out
                                                hover:bg-black
                                                hover:scale-125 hover:rotate-360 group">
                                    <img 
                                        src="https://i.ibb.co.com/v6HHC7hd/Twitter.png" 
                                        alt="Twitter icon" 
                                        className="w-5 h-5 transition-all duration-300 group-hover:invert group-hover:brightness-200" 
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

             
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent my-12" />

             
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="order-2 md:order-1">
                        <p className="text-gray-500 text-sm font-semibold tracking-widest">
                            © 2026 <span className="text-indigo-500">Digitools. All rights reserved.</span>
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-400 order-1 md:order-2">
                        {["Privacy", "Terms", "Cookies"].map(item => (
                            <a key={item} href="#" className="hover:text-white transition-all relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FinelFooter;