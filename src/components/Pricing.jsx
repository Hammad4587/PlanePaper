import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
                    <h2 className="text-4xl tracking-tight text-stone-900 mb-4 font-montserrat font-medium">
                        Engagement Models
                    </h2>
                    <p className="text-stone-500 max-w-lg mx-auto font-manrope">
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
                        className="bg-white p-8 rounded-2xl border border-stone-200 flex flex-col justify-between hover:border-stone-400 transition-colors duration-300 hoverable-element"
                    >
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4 font-manrope">
                                Sprint
                            </div>
                            <h3 className="text-3xl text-stone-900 mb-2 font-montserrat font-medium">
                                MVP
                            </h3>
                            <p className="text-sm text-stone-500 mb-6 font-manrope">
                                From idea to functional AI prototype in 2 weeks.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Technical Feasibility Audit', 'Rapid Prototyping', 'Basic UI Implementation'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-stone-600 font-manrope">
                                        <Check size={16} className="text-stone-900 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="https://calendly.com/hammadmalik4587/30min" target="_blank" rel="noopener noreferrer" className="block hover:bg-stone-50 transition-colors font-medium text-stone-900 font-manrope text-center w-full border-stone-200 border rounded-lg pt-3 pr-4 pb-3 pl-4 hoverable-element">
                            Book Sprint
                        </a>
                    </motion.div>

                    {/* Tier 2 (Featured) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="bg-stone-900 p-8 rounded-2xl border border-stone-900 flex flex-col justify-between relative shadow-xl shadow-stone-900/10 transform md:-translate-y-4 hoverable-element"
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <span className="bg-stone-800 text-white text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wide font-manrope">
                                Popular
                            </span>
                        </div>
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-4 font-manrope">
                                Partner
                            </div>
                            <h3 className="text-3xl text-white mb-2 font-montserrat font-medium">
                                Build
                            </h3>
                            <p className="text-sm text-stone-400 mb-6 font-manrope">
                                Full-scale product development and deployment.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Production-Ready Architecture', 'Custom Model Fine-Tuning', 'Full Stack Engineering'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-stone-300 font-manrope">
                                        <Check size={16} className="text-white mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="https://calendly.com/hammadmalik4587/30min" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-4 text-center rounded-lg bg-white text-stone-900 font-medium hover:bg-stone-200 transition-colors font-manrope hoverable-element">
                            Start Building
                        </a>
                    </motion.div>

                    {/* Tier 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl border border-stone-200 flex flex-col justify-between hover:border-stone-400 transition-colors duration-300 hoverable-element"
                    >
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4 font-manrope">
                                Dedicated
                            </div>
                            <h3 className="text-3xl text-stone-900 mb-2 font-montserrat font-medium">
                                Scale
                            </h3>
                            <p className="text-sm text-stone-500 mb-6 font-manrope">
                                Your dedicated AI R&D department on retainer.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Dedicated Engineering Team', 'Unlimited Requests', 'Priority SLA'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-stone-600 font-manrope">
                                        <Check size={16} className="text-stone-900 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="https://calendly.com/hammadmalik4587/30min" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-4 text-center rounded-lg border border-stone-200 text-stone-900 font-medium hover:bg-stone-50 transition-colors font-manrope hoverable-element">
                            Contact Sales
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
