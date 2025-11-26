import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <main className="min-h-[90vh] flex flex-col lg:px-12 lg:pt-20 text-center max-w-[90rem] mx-auto pt-40 pr-6 pb-24 pl-6 relative items-center justify-center">
            {/* Decorative subtle grid */}
            <div className="absolute inset-0 z-[-1] bg-grid-pattern opacity-60"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex gap-2 bg-white border-stone-200 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm items-center"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono text-stone-500 uppercase tracking-widest font-manrope">
                    Accepting New Projects Q4
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl tracking-tighter text-stone-900 leading-[0.9] mb-8 font-montserrat font-medium"
            >
                Fold complexity.
                <br />
                <span className="text-stone-400 font-montserrat font-medium">
                    Ship clarity.
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:text-xl leading-relaxed text-lg font-light text-stone-600 font-manrope max-w-xl mb-10"
            >
                We are <span className="font-semibold">PlanePaper</span>. A product-first AI studio engineering generative systems that transform messy workflows into pristine, production-grade capabilities.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <a href="#pricing" className="group hoverable-element inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all shadow-xl shadow-stone-900/10 hover:scale-[1.02] font-manrope">
                    Start Building
                    <ArrowRight className="ml-2 w-[18px] h-[18px] transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#work" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-900 bg-white border border-stone-200 rounded-full hover:bg-stone-50 transition-all hover:border-stone-300 font-manrope hoverable-element">
                    View Selected Work
                </a>
            </motion.div>
        </main>
    );
};

export default Hero;
