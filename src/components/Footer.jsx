import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="lg:px-12 overflow-hidden border-t pt-32 pr-6 pb-12 pl-6 relative bg-white border-stone-200 dark:bg-stone-950 dark:border-stone-800" id="contact">
            {/* Giant text background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
                <div className="text-[20vw] leading-none whitespace-nowrap absolute -top-10 left-0 font-montserrat font-medium text-stone-900 dark:text-stone-100">
                    PLANEPAPER
                </div>
            </div>

            <div className="z-10 max-w-[90rem] mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-5xl md:text-7xl tracking-tighter mb-8 font-montserrat font-medium text-stone-900 dark:text-stone-50">
                            Let's fold
                            <br />
                            the future.
                        </h2>
                        <p className="text-lg text-stone-500 max-w-md mb-8 font-manrope dark:text-stone-400">
                            Ready to automate the boring and engineer the impossible? Drop us
                            a line.
                        </p>
                        <a href="mailto:hello@planepaper.ai" className="inline-flex items-center transition-all text-xl font-medium border-b pb-1 hoverable-element font-manrope hover:text-stone-600 hover:border-stone-400 text-stone-900 border-stone-900 dark:text-stone-100 dark:border-stone-100 dark:hover:text-stone-300 dark:hover:border-stone-300">
                            hello@planepaper.ai
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-col justify-end items-start lg:items-end">
                        <div className="grid grid-cols-3 gap-x-12 gap-y-4 text-sm mb-12">
                            <div>
                                <div className="font-mono uppercase tracking-widest mb-4 font-manrope text-stone-400 dark:text-stone-500">
                                    Social
                                </div>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="hover:text-stone-500 transition-colors hoverable-element font-manrope text-stone-900 dark:text-stone-300 dark:hover:text-stone-100">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-stone-500 transition-colors hoverable-element font-manrope text-stone-900 dark:text-stone-300 dark:hover:text-stone-100">
                                            Twitter / X
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="font-mono uppercase tracking-widest mb-4 font-manrope text-stone-400 dark:text-stone-500">
                                    Sitemap
                                </div>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/#services" className="hover:text-stone-500 transition-colors hoverable-element font-manrope text-stone-900 dark:text-stone-300 dark:hover:text-stone-100">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#work" className="hover:text-stone-500 transition-colors hoverable-element font-manrope text-stone-900 dark:text-stone-300 dark:hover:text-stone-100">
                                            Work
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="font-mono uppercase tracking-widest mb-4 font-manrope text-stone-400 dark:text-stone-500">
                                    Legal
                                </div>
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/terms" className="hover:text-stone-500 transition-colors hoverable-element font-manrope text-stone-900 dark:text-stone-300 dark:hover:text-stone-100">
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy" className="hover:text-stone-500 transition-colors hoverable-element font-manrope text-stone-900 dark:text-stone-300 dark:hover:text-stone-100">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/refund" className="hover:text-stone-500 transition-colors hoverable-element font-manrope text-stone-900 dark:text-stone-300 dark:hover:text-stone-100">
                                            Refund Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 dark:border-stone-800">
                    <div className="uppercase md:mb-0 text-xs text-stone-500 tracking-wider font-mono mb-4 dark:text-stone-500">
                        &copy; 2026 PlanePaper. All rights reserved.
                    </div>
                    <div className="text-xs text-stone-500 font-mono font-manrope dark:text-stone-500">
                        Islamabad &bull; Delaware &bull; Remote
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
