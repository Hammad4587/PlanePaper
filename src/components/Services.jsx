import React from 'react';
import { motion } from 'framer-motion';
import { Box, TrendingUp, Code, Workflow } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Box size={24} />,
            title: "Generative AI Systems",
            description: "Custom LLM fine-tuning, RAG architectures, and autonomous agent swarms tailored to your data."
        },
        {
            icon: <TrendingUp size={24} />,
            title: "ML & Analytics",
            description: "Predictive modeling and computer vision pipelines. Turning unstructured data into strategic assets."
        },
        {
            icon: <Code size={24} />,
            title: "No-Code Acceleration",
            description: "Rapid MVP development using low-code tools when speed is paramount, without sacrificing scalability."
        },
        {
            icon: <Workflow size={24} />,
            title: "Workflow Automation",
            description: "End-to-end process automation. We remove the human bottleneck from repetitive cognitive tasks."
        }
    ];

    return (
        <section className="lg:px-12 lg:pt-24 lg:pb-24 border-stone-200 border-t pt-24 pr-6 pb-24 pl-6" id="services">
            <div className="max-w-[90rem] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="text-4xl tracking-tight text-stone-900 mb-2 font-montserrat font-medium">
                            Capabilities
                        </h2>
                        <p className="text-stone-500 font-mono text-sm font-manrope">
                            Design. Engineer. Deploy.
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-stone-400 text-sm max-w-xs font-manrope">
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
                            className="group hoverable-element relative bg-white rounded-xl p-8 border border-stone-200 paper-shadow paper-shadow-hover transition-all duration-500 h-80 flex flex-col justify-between"
                        >
                            <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center border border-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300 text-stone-900">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-stone-900 mb-2 font-manrope">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-stone-500 leading-relaxed font-manrope">
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
