import React from 'react';
import { motion } from 'framer-motion';

const Crew = () => {
    return (
        <section className="lg:px-12 border-stone-200 border-b pr-6 pb-24 pl-6 pt-12">
            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-4"
                >
                    <div className="w-16 h-1 bg-stone-900 mb-8"></div>
                    <h2 className="text-4xl tracking-tight text-stone-900 mb-6 font-montserrat font-medium">
                        Engineered by<br />Founders.
                    </h2>
                    <p className="text-stone-500 text-lg leading-relaxed font-manrope">
                        We aren't a traditional agency with account managers and bloat. We
                        are a compact strike team of AI engineers and product architects.
                    </p>
                    <div className="mt-8 flex gap-4 flex-wrap">
                        {['Islamabad', 'Delaware', 'Remote'].map((loc) => (
                            <div key={loc} className="flex gap-2 text-xs text-stone-500 font-mono bg-white border-stone-200 border rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
                                • {loc}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { val: "50+", label: "Models Deployed" },
                        { val: "48h", label: "Avg Proto Time" },
                        { val: "$5M+", label: "Client Value" },
                        { val: "0%", label: "Equity Taken" }
                    ].map((stat, index) => (
                        <div key={index} className="bg-stone-100 p-6 rounded-lg text-center hoverable-element">
                            <div className="text-3xl text-stone-900 mb-1 font-montserrat font-medium">
                                {stat.val}
                            </div>
                            <div className="text-xs font-mono text-stone-500 uppercase font-manrope">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Crew;
