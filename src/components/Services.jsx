import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
            ),
            title: "Generative AI Systems",
            description: "Custom LLM fine-tuning, RAG architectures, and autonomous agent swarms tailored to your data."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            title: "ML & Analytics",
            description: "Predictive modeling and computer vision pipelines. Turning unstructured data into strategic assets."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="8" height="8" x="2" y="2" rx="2" />
                    <path d="M14 2c.6 0 1.1.2 1.5.5L20 6.5c.3.4.5.9.5 1.5v10c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4" />
                </svg>
            ),
            title: "No-Code Acceleration",
            description: "Rapid MVP development using low-code tools when speed is paramount, without sacrificing scalability."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
            ),
            title: "Workflow Automation",
            description: "End-to-end process automation. We remove the human bottleneck from repetitive cognitive tasks."
        }
    ];

    return (
        <section className="lg:px-12 lg:pt-24 lg:pb-24 border-t pt-24 pr-6 pb-24 pl-6 border-stone-200 dark:border-stone-800" id="services">
            <div className="max-w-[90rem] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="text-4xl tracking-tight mb-2 font-montserrat font-medium text-stone-900 dark:text-stone-50">
                            Capabilities
                        </h2>
                        <p className="text-stone-500 font-mono text-sm font-manrope dark:text-stone-400">
                            Design. Engineer. Deploy.
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-sm max-w-xs font-manrope text-stone-400 dark:text-stone-500">
                            We don't just wrap APIs. We build resilient, scalable
                            architectures for enterprise needs.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
                            className="group hoverable-element relative rounded-xl p-8 border paper-shadow paper-shadow-hover transition-all duration-500 h-80 flex flex-col justify-between bg-white border-stone-200 dark:bg-stone-900 dark:border-stone-800 dark:hover:border-stone-700"
                        >
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center border group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300 bg-stone-50 border-stone-100 text-stone-900 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-100 dark:group-hover:bg-stone-100 dark:group-hover:text-stone-900">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-2 font-manrope text-stone-900 dark:text-stone-100">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-stone-500 leading-relaxed font-manrope dark:text-stone-400">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
