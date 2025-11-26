import React from 'react';
import { Calendar } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';

const Navbar = () => {
    return (
        <nav className="fixed z-40 top-0 left-0 right-0 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/50">
            <div className="flex h-20 max-w-[90rem] mx-auto px-6 items-center justify-between">
                <a href="#" className="flex items-center gap-2 group hoverable-element">
                    {/* Abstract Logo */}
                    <div className="w-8 h-8 relative flex items-center justify-center">
                        <AnimatedLogo width={40} height={40} color="#1c1917" className="w-full h-full" />
                    </div>
                    <span className="font-display font-bold tracking-tighter text-lg uppercase text-stone-900 font-manrope">
                        PlanePaper
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
                    <a href="#services" className="hover:text-stone-900 transition-colors font-manrope hoverable-element">
                        Services
                    </a>
                    <a href="#work" className="hover:text-stone-900 transition-colors font-manrope hoverable-element">
                        Work
                    </a>
                    <a href="#pricing" className="hover:text-stone-900 transition-colors font-manrope hoverable-element">
                        Pricing
                    </a>
                </div>

                {/* Animated Button */}
                <a href="https://calendly.com/hammadmalik4587/30min" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex btn-wrapper hoverable-element">
                    <div className="line horizontal top"></div>
                    <div className="line vertical right"></div>
                    <div className="line horizontal bottom"></div>
                    <div className="line vertical left"></div>

                    <div className="dot top left"></div>
                    <div className="dot top right"></div>
                    <div className="dot bottom right"></div>
                    <div className="dot bottom left"></div>

                    <div className="btn-inner group">
                        <Calendar size={14} className="group-hover:text-stone-200" />
                        <span className="btn-text">Book a Call</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform group-hover:text-stone-200">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
