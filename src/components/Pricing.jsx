import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    return (
        <section className="lg:px-12 pt-24 pr-6 pb-24 pl-6" id="pricing">
            <div className="max-w-[90rem] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-4xl tracking-tight mb-4 font-montserrat font-medium text-stone-900 dark:text-stone-50">
                        Engagement Models
                    </h2>
                    <p className="text-stone-500 max-w-lg mx-auto font-manrope dark:text-stone-400">
                        Transparent pricing. Output focused. No hourly billing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tier 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 rounded-2xl border flex flex-col justify-between transition-colors duration-300 hoverable-element bg-white border-stone-200 hover:border-stone-400 dark:bg-stone-900 dark:border-stone-800 dark:hover:border-stone-700"
                    >
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4 font-manrope dark:text-stone-400">
                                Sprint
                            </div>
                            <h3 className="text-3xl mb-2 font-montserrat font-medium text-stone-900 dark:text-stone-100">
                                MVP
                            </h3>
                            <p className="text-sm text-stone-500 mb-6 font-manrope dark:text-stone-400">
                                From idea to functional AI prototype in 2 weeks.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Technical Feasibility Audit', 'Rapid Prototyping'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-manrope text-stone-600 dark:text-stone-300">
                                        <svg className="w-4 h-4 mt-0.5 text-stone-900 dark:text-stone-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#contact" className="block transition-colors font-medium text-center w-full border rounded-lg pt-3 pr-4 pb-3 pl-4 hoverable-element font-manrope hover:bg-stone-50 text-stone-900 border-stone-200 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-700">
                            Book Sprint
                        </a>
                    </motion.div>

                    {/* Tier 2 (Featured) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="p-8 rounded-2xl border flex flex-col justify-between relative shadow-xl transform md:-translate-y-4 hoverable-element bg-stone-900 border-stone-900 shadow-stone-900/10 dark:bg-stone-100 dark:border-stone-100"
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <span className="text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wide font-manrope bg-stone-800 text-white dark:bg-stone-200 dark:text-stone-900">
                                Popular
                            </span>
                        </div>
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest mb-4 font-manrope text-stone-400 dark:text-stone-500">
                                Partner
                            </div>
                            <h3 className="text-3xl mb-2 font-montserrat font-medium text-white dark:text-stone-900">
                                Build
                            </h3>
                            <p className="text-sm mb-6 font-manrope text-stone-400 dark:text-stone-500">
                                Full-scale product development and deployment.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Production-Ready Architecture', 'Custom Model Fine-Tuning'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-manrope text-stone-300 dark:text-stone-600">
                                        <svg className="w-4 h-4 mt-0.5 text-white dark:text-stone-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#contact" className="block w-full py-3 px-4 text-center rounded-lg font-medium transition-colors hoverable-element font-manrope bg-white text-stone-900 hover:bg-stone-200 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800">
                            Start Building
                        </a>
                    </motion.div>

                    {/* Tier 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 rounded-2xl border flex flex-col justify-between transition-colors duration-300 hoverable-element bg-white border-stone-200 hover:border-stone-400 dark:bg-stone-900 dark:border-stone-800 dark:hover:border-stone-700"
                    >
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4 font-manrope dark:text-stone-400">
                                Dedicated
                            </div>
                            <h3 className="text-3xl mb-2 font-montserrat font-medium text-stone-900 dark:text-stone-100">
                                Scale
                            </h3>
                            <p className="text-sm text-stone-500 mb-6 font-manrope dark:text-stone-400">
                                Your dedicated AI R&amp;D department on retainer.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Dedicated Engineering Team', 'Unlimited Requests'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-manrope text-stone-600 dark:text-stone-300">
                                        <svg className="w-4 h-4 mt-0.5 text-stone-900 dark:text-stone-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#contact" className="block w-full py-3 px-4 text-center rounded-lg border font-medium transition-colors hoverable-element font-manrope border-stone-200 text-stone-900 hover:bg-stone-50 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-700">
                            Contact Sales
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
