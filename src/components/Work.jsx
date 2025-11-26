import React from 'react';
import { ArrowRight } from 'lucide-react';

const Work = () => {
    const projects = [
        {
            title: "DocuParse AI",
            category: "FinTech",
            description: "Automated financial document extraction processing 50k+ invoices monthly with 99.8% accuracy.",
            image: "/fintech.png"
        },
        {
            title: "MedScribe Voice",
            category: "Healthcare",
            description: "Real-time doctor-patient transcription and EMR autofill system using local Whisper models.",
            image: "/health.png"
        },
        {
            title: "StyleMatch Engine",
            category: "E-Commerce",
            description: "Computer vision pipeline for visual search and similar product recommendations.",
            image: "/ecommerce.png"
        },
        {
            title: "Contract Guard",
            category: "Legal",
            description: "Legal risk assessment tool scanning contracts against playbooks using GPT-5.",
            image: "/legal.png"
        }
    ];

    return (
        <section className="px-6 lg:px-24 py-20 bg-white border-y border-stone-200" id="work">
            <div className="max-w-[90rem] mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-[1px] bg-stone-300"></div>
                        <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">Selected Output 2025</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl tracking-tight text-stone-900 mb-4 font-montserrat font-medium">
                        Selected Output
                    </h2>
                    <p className="text-sm text-stone-500 font-mono">Case Studies 2025-Q3</p>
                </div>

                {/* Projects Grid - 2x2 on desktop, 1 column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group cursor-none hoverable-element flex flex-col gap-6">
                            <div className="relative overflow-hidden bg-stone-100 rounded-lg h-[50vh] md:h-[400px] border border-stone-200 w-full">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-stone-200/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                        {project.icon}
                                    </div>
                                )}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-stone-200/50">
                                    <span className="text-xs font-mono font-medium text-stone-900 font-manrope">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl text-stone-900 mb-2 group-hover:text-stone-600 transition-colors font-montserrat font-medium">
                                        {project.title}
                                    </h3>
                                    <p className="text-stone-500 text-sm max-w-md font-manrope">
                                        {project.description}
                                    </p>
                                </div>
                                <span className="p-2 rounded-full border border-stone-200 group-hover:bg-stone-900 group-hover:text-white transition-all">
                                    <ArrowRight size={20} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
