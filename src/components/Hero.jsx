import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
    return (
        <main className="min-h-[90vh] flex flex-col lg:px-12 lg:pt-20 overflow-hidden text-center max-w-[90rem] mx-auto pt-40 pr-6 pb-24 pl-6 relative items-center justify-center">
            {/* Particle Background Effect */}
            <ParticleBackground className="-z-10" />

            {/* Decorative subtle grid */}
            <div className="absolute inset-0 z-[-1] bg-grid-pattern opacity-60"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm bg-white border-stone-200 dark:bg-stone-900 dark:border-stone-800 relative z-10"
            >
                <span className="w-1.5 h-1.5 animate-pulse bg-red-500 rounded-full"></span>
                <span className="uppercase text-xs text-stone-500 tracking-widest font-mono dark:text-stone-400">
                    Accepting New Projects Q1
                </span>
            </motion.div>

            {/* Partner Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 mb-4 relative z-10 hoverable-element"
            >
                <a href="https://noodleseed.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://noodle-partner-badge.fly.dev/badge.svg?theme=light&style=compact"
                        alt="Partner company of Noodle Seed"
                        width="220"
                        height="54"
                        className="block dark:hidden"
                    />
                    <img
                        src="https://noodle-partner-badge.fly.dev/badge.svg?theme=dark&style=compact"
                        alt="Partner company of Noodle Seed"
                        width="220"
                        height="54"
                        className="hidden dark:block"
                    />
                </a>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-8 font-montserrat font-medium text-stone-900 dark:text-stone-50 relative z-10"
            >
                Fold complexity.
                <br />
                <span className="font-montserrat font-medium text-stone-400 dark:text-stone-600">
                    Ship clarity.
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:text-xl leading-relaxed dark:text-stone-400 text-lg font-light text-stone-600 font-manrope max-w-xl mb-10 relative z-10"
            >
                We are <span className="font-semibold text-stone-900 dark:text-stone-100">PlanePaper</span>. A product-first AI studio engineering generative systems that transform messy workflows into pristine, production-grade capabilities.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4 relative z-10"
            >
                <a href="#contact" className="btn-wrapper hoverable-element">
                    <div className="line horizontal top"></div>
                    <div className="line vertical right"></div>
                    <div className="line horizontal bottom"></div>
                    <div className="line vertical left"></div>
                    <div className="dot top left"></div>
                    <div className="dot top right"></div>
                    <div className="dot bottom right"></div>
                    <div className="dot bottom left"></div>
                    <div className="btn-inner group" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                        <span className="btn-text font-manrope">Start Building</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </div>
                </a>
                <a href="#work" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border rounded-full transition-all hoverable-element font-manrope text-stone-900 bg-white border-stone-200 hover:bg-stone-50 hover:border-stone-300 dark:bg-stone-900 dark:border-stone-800 dark:text-stone-100 dark:hover:bg-stone-800 dark:hover:border-stone-700">
                    View Selected Work
                </a>
            </motion.div>

        </main>
    );
};

export default Hero;
