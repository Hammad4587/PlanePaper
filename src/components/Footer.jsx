import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="lg:px-12 overflow-hidden bg-white border-stone-200 border-t pt-32 pr-6 pb-12 pl-6 relative" id="contact">
            {/* Giant text background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
                <div className="text-[20vw] leading-none text-stone-900 whitespace-nowrap absolute -top-10 left-0 font-montserrat font-medium">
                    PLANEPAPER
                </div>
            </div>

            <div className="z-10 max-w-[90rem] mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-5xl md:text-7xl tracking-tighter text-stone-900 mb-8 font-montserrat font-medium">
                            Let's fold
                            <br />
                            the future.
                        </h2>
                        <p className="text-lg text-stone-500 max-w-md mb-8 font-manrope">
                            Ready to automate the boring and engineer the impossible? Drop us
                            a line.
                        </p>
                        <a href="mailto:hello@planepaper.ai" className="inline-flex items-center hover:text-stone-600 hover:border-stone-400 transition-all text-xl font-medium text-stone-900 border-stone-900 border-b pb-1 font-manrope hoverable-element">
                            hello@planepaper.ai
                            <ArrowUpRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>

                    <div className="flex flex-col justify-end items-start lg:items-end">
                        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm mb-12">
                            <div>
                                <div className="font-mono text-stone-400 uppercase tracking-widest mb-4 font-manrope">
                                    Social
                                </div>
                                <ul className="space-y-2">
                                    {['LinkedIn', 'Twitter / X', 'GitHub'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-stone-900 hover:text-stone-500 transition-colors font-manrope hoverable-element">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="font-mono text-stone-400 uppercase tracking-widest mb-4 font-manrope">
                                    Sitemap
                                </div>
                                <ul className="space-y-2">
                                    {['Services', 'Work', 'Pricing'].map((item) => (
                                        <li key={item}>
                                            <a href={`#${item.toLowerCase()}`} className="text-stone-900 hover:text-stone-500 transition-colors font-manrope hoverable-element">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200">
                    <div className="uppercase md:mb-0 text-xs text-stone-500 tracking-wider font-mono mb-4">
                        © 2025 PlanePaper. All rights reserved.
                    </div>
                    <div className="text-xs text-stone-500 font-mono">
                        Islamabad • Delaware • Remote
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
