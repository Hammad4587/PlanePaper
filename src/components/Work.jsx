import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
    return (
        <section className="lg:px-12 border-y dark:bg-stone-950 dark:border-stone-800 bg-white border-stone-200 pt-24 pr-6 pb-24 pl-6" id="work">
            <div className="max-w-[90rem] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-montserrat font-medium text-stone-900 dark:text-stone-50">
                            The Blueprint
                        </h2>
                        <p className="leading-relaxed dark:text-stone-400 text-lg font-light text-stone-500 font-manrope">
                            We are currently crafting our inaugural portfolio in stealth.
                            Until the curtain rises, here are the non-negotiable principles that govern our output.
                        </p>
                    </div>
                    <div className="hidden md:block pb-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-stone-100 border-stone-200 dark:bg-stone-900 dark:border-stone-800">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                                Systems Operational
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* CARD 1: Visual Integrity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative rounded-2xl p-8 md:p-10 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#110f0e] overflow-hidden min-h-[420px] flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-500 shadow-sm hover:shadow-xl"
                    >
                        <div className="relative z-10">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-900 dark:text-stone-100">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-3 tracking-tight">
                                Visual Integrity
                            </h3>
                            <p className="text-stone-500 dark:text-stone-400 font-manrope font-light leading-relaxed max-w-sm text-sm md:text-base">
                                Pixels are not approximations. We engineer interfaces with architectural precision, where beauty is a function of utility.
                            </p>
                        </div>

                        {/* Visualization: Split Screen Wireframe vs UI */}
                        <div className="absolute right-0 bottom-0 w-[90%] md:w-[70%] h-[55%] md:h-[65%] border-t border-l border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 rounded-tl-2xl overflow-hidden shadow-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">
                            <div className="absolute inset-0 flex h-full">
                                {/* Left: Wireframe */}
                                <div className="w-1/2 bg-stone-50 dark:bg-stone-950 p-5 border-r border-stone-200 dark:border-stone-800 relative h-full">
                                    <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#a8a29e 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
                                    <div className="text-[9px] font-mono text-stone-400 mb-4 uppercase tracking-wider absolute top-4 left-5 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                                        Blueprint
                                    </div>
                                    <div className="mt-8 space-y-3 opacity-60 relative z-10">
                                        <div className="h-8 w-8 rounded-full border border-dashed border-stone-400 dark:border-stone-600"></div>
                                        <div className="h-1.5 w-20 bg-stone-300 dark:bg-stone-800 rounded-sm"></div>
                                        <div className="h-1.5 w-12 bg-stone-200 dark:bg-stone-800 rounded-sm"></div>
                                        <div className="h-7 w-full border border-dashed border-stone-300 dark:border-stone-700 rounded mt-4"></div>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <div className="h-12 w-full bg-stone-200 dark:bg-stone-800 rounded-sm opacity-50"></div>
                                            <div className="h-12 w-full bg-stone-200 dark:bg-stone-800 rounded-sm opacity-50"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right: Production */}
                                <div className="w-1/2 bg-white dark:bg-[#0c0a09] p-5 relative h-full group/ui">
                                    <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 mb-4 uppercase tracking-wider absolute top-4 left-5 flex items-center gap-1.5">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                        </span>
                                        Live
                                    </div>
                                    <div className="mt-8 space-y-3 relative z-10">
                                        <div className="relative h-8 w-8">
                                            <div className="h-full w-full rounded-full bg-gradient-to-br from-stone-300 to-stone-500 dark:from-stone-600 dark:to-stone-400 shadow-lg border-2 border-white dark:border-stone-800"></div>
                                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-[#0c0a09] rounded-full"></div>
                                        </div>
                                        <div className="h-1.5 w-24 bg-stone-900 dark:bg-stone-100 rounded-sm shadow-sm"></div>
                                        <div className="h-1.5 w-16 bg-stone-400 dark:bg-stone-600 rounded-sm"></div>
                                        <div className="h-7 w-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded shadow-lg shadow-stone-900/10 flex items-center justify-center text-[9px] font-bold tracking-wide mt-4">
                                            Confirm Access
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <div className="h-12 w-full bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 rounded-sm shadow-sm"></div>
                                            <div className="h-12 w-full bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 rounded-sm shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Divider Line with Handle */}
                            <div className="absolute inset-y-0 left-1/2 w-px bg-stone-200 dark:bg-stone-800 z-20 flex items-center justify-center">
                                <div className="w-4 h-8 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full flex items-center justify-center shadow-md">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-stone-400">
                                        <path d="M14 6l-6 6 6 6" />
                                        <path d="M10 6l6 6-6 6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: Radical Velocity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="group md:p-10 dark:border-stone-800 dark:bg-stone-950 overflow-hidden min-h-[420px] flex flex-col hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-500 hover:shadow-2xl bg-white border-stone-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-lg justify-between"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-stone-50 dark:from-stone-900 dark:to-[#0c0a09] border border-stone-200 dark:border-stone-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-500 group-hover:shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-900 dark:text-stone-100">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-3 tracking-tight">
                                Radical Velocity
                            </h3>
                            <p className="text-stone-500 dark:text-stone-400 font-manrope font-light leading-relaxed max-w-sm text-sm md:text-base">
                                Latency is the enemy of trust. We optimize for the blink of an eye, targeting sub-100ms interaction loops.
                            </p>
                        </div>

                        {/* Dashboard Widget */}
                        <div className="relative w-full mt-8 bg-stone-50 dark:bg-[#0c0a09] rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                            <div className="flex justify-between items-center px-5 py-3 border-b border-stone-200/50 dark:border-stone-800/50 bg-white dark:bg-[#110f0e]">
                                <div className="flex items-center gap-2">
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </div>
                                    <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 dark:text-stone-400 font-semibold">Live Monitor</span>
                                </div>
                                <div className="flex items-center gap-1.5 opacity-60">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                    <span className="text-[10px] font-mono text-stone-400 uppercase">US-East</span>
                                </div>
                            </div>

                            <div className="p-6 relative flex flex-col justify-between bg-stone-50/40 dark:bg-stone-900/40 backdrop-blur-sm overflow-hidden transition-colors duration-500">
                                <div className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <div className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-300 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-stone-400"></span>
                                            </div>
                                            <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-stone-500 dark:text-stone-400">Response Time</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mt-1">
                                            <span className="text-5xl font-semibold tracking-tighter text-stone-900 dark:text-stone-100 font-display tabular-nums">14.2</span>
                                            <span className="text-lg text-stone-400 font-mono font-light">ms</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end">
                                        <div className="flex items-center gap-1.5 pl-1.5 pr-2 py-1 rounded-md bg-white border border-stone-200 shadow-sm transition-all duration-300 dark:bg-stone-800 dark:border-stone-700 group-hover:shadow-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                                                <path d="m19 12-7 7-7-7" />
                                                <path d="M12 19V5" />
                                            </svg>
                                            <span className="text-xs font-mono font-semibold text-stone-700 dark:text-stone-300">24%</span>
                                        </div>
                                        <span className="text-[9px] font-medium text-stone-400 mt-1.5 text-right tracking-tight opacity-80">Better than avg</span>
                                    </div>
                                </div>

                                {/* Chart */}
                                <div className="-mb-3 -translate-y-12 w-full h-28 mt-4 relative">
                                    <svg className="overflow-visible w-full h-full" viewBox="0 0 280 100" preserveAspectRatio="none" strokeWidth="2">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#a8a29e', stopOpacity: 0.25 }} />
                                                <stop offset="100%" style={{ stopColor: '#a8a29e', stopOpacity: 0 }} />
                                            </linearGradient>
                                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <line x1="0" y1="55" x2="280" y2="55" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-stone-300 dark:text-stone-700 opacity-30" vectorEffect="non-scaling-stroke" />
                                        <path d="M0,85 C40,80 60,95 100,65 C140,35 180,55 220,35 C250,20 260,35 280,15 V110 H0 Z" fill="url(#chartGradient)" className="opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                                        <path d="M0,85 C40,80 60,95 100,65 C140,35 180,55 220,35 C250,20 260,35 280,15" fill="none" stroke="#a8a29e" strokeWidth="2" filter="url(#glow)" vectorEffect="non-scaling-stroke" className="drop-shadow-sm transition-all duration-500 group-hover:stroke-[2.5px] dark:stroke-stone-500" />
                                        <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <line x1="160" y1="46.25" x2="160" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-stone-400 dark:text-stone-600 opacity-50" vectorEffect="non-scaling-stroke" />
                                            <circle cx="160" cy="46.25" r="10" className="fill-red-500 opacity-10" />
                                            <circle cx="160" cy="46.25" r="3.5" className="fill-stone-50 dark:fill-stone-900 stroke-red-500 stroke-[2px]" />
                                        </g>
                                        <g transform="translate(280, 15)">
                                            <circle r="3.5" className="fill-stone-50 dark:fill-stone-900 stroke-red-500 stroke-[2px] transition-colors duration-300" />
                                            <circle r="12" className="fill-red-500 opacity-20 animate-ping" style={{ animationDuration: '2s' }} />
                                        </g>
                                    </svg>
                                    <div className="absolute top-0 right-0 transform -translate-y-2 bg-stone-900/90 dark:bg-stone-100/90 backdrop-blur text-stone-50 dark:text-stone-900 text-[10px] font-mono font-bold px-2 py-1 rounded opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg border border-stone-700 dark:border-stone-200 z-20">
                                        14.2ms
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50 text-center divide-x divide-stone-200 dark:divide-stone-800">
                                <div className="py-2.5 px-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                                    <div className="text-[9px] uppercase tracking-wider text-stone-400 font-mono mb-0.5">P50</div>
                                    <div className="text-xs font-mono font-medium text-stone-700 dark:text-stone-300">12ms</div>
                                </div>
                                <div className="py-2.5 px-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                                    <div className="text-[9px] uppercase tracking-wider text-stone-400 font-mono mb-0.5">P99</div>
                                    <div className="text-xs font-mono font-medium text-stone-700 dark:text-stone-300">45ms</div>
                                </div>
                                <div className="py-2.5 px-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                                    <div className="text-[9px] uppercase tracking-wider text-stone-400 font-mono mb-0.5">Error</div>
                                    <div className="text-xs font-mono font-medium text-stone-700 dark:text-stone-300">0.00%</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3: Systematic Scale */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative rounded-2xl p-8 md:p-10 border overflow-hidden min-h-[520px] flex flex-col justify-between transition-colors duration-500 shadow-xl bg-stone-50 border-stone-200 hover:border-stone-300 dark:bg-[#0c0a09] dark:border-stone-800 dark:hover:border-stone-700"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30"></div>
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-stone-300/10 dark:bg-stone-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="relative z-20">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl bg-white/80 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700/50 flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-600 dark:text-stone-400">
                                        <path d="M12 2v20" />
                                        <path d="m17 5-5-3-5 3" />
                                        <path d="m17 19-5 3-5-3" />
                                        <path d="M2 12h20" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/80 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700/50 backdrop-blur-md">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 dark:bg-stone-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 dark:bg-stone-400"></span>
                                    </span>
                                    <span className="text-[10px] font-mono font-medium text-stone-600 dark:text-stone-300 uppercase tracking-widest">System Healthy</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-3 tracking-tight">Systematic Scale</h3>
                            <p className="text-stone-500 dark:text-stone-400 font-manrope font-light leading-relaxed max-w-sm text-sm md:text-base">
                                Architected for the next billion requests. Fully typed, self-documenting, and built to expand without breaking.
                            </p>
                        </div>

                        {/* Visualization: Exploded Stack */}
                        <div className="flex-1 min-h-[280px] flex z-10 w-full mt-4 relative items-center justify-center" style={{ perspective: '1200px' }}>
                            <div className="relative w-64 h-full transition-transform duration-700 transform-style-preserve-3d" style={{ transform: 'rotateX(20deg) rotateY(-15deg) rotateZ(5deg)' }}>
                                {/* LAYER 1: DATA */}
                                <div className="absolute top-1/2 left-1/2 w-64 h-20 bg-white/90 dark:bg-[#0F0E0D]/90 backdrop-blur-xl border border-stone-200 dark:border-stone-800 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(0,0,0,1),0_20px_40px_-10px_rgba(0,0,0,0.8)] flex items-center px-4 gap-4 z-10 transition-all duration-700 -translate-x-[calc(50%+8px)] -translate-y-[calc(50%-8px)] group-hover:-translate-x-[calc(50%+80px)] group-hover:-translate-y-[calc(50%-80px)] group-hover:border-stone-300 dark:group-hover:border-stone-700/50">
                                    <div className="w-10 h-10 rounded bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center shrink-0 relative z-10 shadow-inner group-hover:border-stone-300 dark:group-hover:border-stone-700 transition-colors">
                                        <svg className="w-5 h-5 text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                            <path d="M12 12v9" />
                                            <path d="m16 16-4-4-4 4" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-semibold group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors">Postgres Cluster</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-500/50 group-hover:bg-emerald-500/80 transition-colors"></span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-[10px] font-mono text-stone-400">us-east-1</div>
                                            <div className="text-[10px] font-mono text-stone-300 dark:text-stone-600">|</div>
                                            <div className="text-[10px] font-mono text-stone-400">4ms lat</div>
                                        </div>
                                    </div>
                                </div>

                                {/* LAYER 2: LOGIC */}
                                <div className="absolute top-1/2 left-1/2 w-64 h-20 -translate-x-1/2 -translate-y-1/2 bg-stone-50/90 dark:bg-[#141210]/90 backdrop-blur-xl border border-stone-200 dark:border-stone-700/50 rounded-xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_1px_rgba(0,0,0,1),0_20px_40px_-10px_rgba(0,0,0,0.7)] flex items-center px-4 gap-4 z-20 transition-all duration-700 group-hover:scale-105 group-hover:border-stone-300 dark:group-hover:border-stone-600 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_0_30px_-5px_rgba(120,113,108,0.1)]">
                                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-300/30 dark:via-stone-500/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
                                    </div>
                                    <div className="w-10 h-10 rounded bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center shrink-0 relative z-10 shadow-inner group-hover:border-stone-300 dark:group-hover:border-stone-500/30 transition-colors">
                                        <svg className="w-5 h-5 text-stone-700 dark:text-stone-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                                            <line x1="6" y1="6" x2="6.01" y2="6" />
                                            <line x1="6" y1="18" x2="6.01" y2="18" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <span className="text-[10px] font-mono text-stone-700 dark:text-stone-200 uppercase tracking-widest font-semibold group-hover:text-stone-900 dark:group-hover:text-white transition-colors">Edge Workers</span>
                                            <div className="flex gap-0.5">
                                                <span className="w-0.5 h-2 bg-stone-300 dark:bg-stone-500 rounded-full animate-pulse"></span>
                                                <span className="w-0.5 h-3 bg-stone-300 dark:bg-stone-500 rounded-full animate-pulse delay-75"></span>
                                                <span className="w-0.5 h-1.5 bg-stone-300 dark:bg-stone-500 rounded-full animate-pulse delay-150"></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-[10px] font-mono text-stone-400">v2.4.0</div>
                                            <div className="text-[10px] font-mono text-stone-300 dark:text-stone-600">|</div>
                                            <div className="text-[10px] font-mono text-stone-400">24k req/s</div>
                                        </div>
                                    </div>
                                </div>

                                {/* LAYER 3: INTERFACE */}
                                <div className="absolute top-1/2 left-1/2 w-64 h-20 bg-white/95 dark:bg-stone-900/90 backdrop-blur-xl border border-stone-300 dark:border-stone-600/50 rounded-xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] dark:shadow-[0_0_0_1px_rgba(0,0,0,1),0_25px_50px_-12px_rgba(0,0,0,0.9)] flex items-center px-4 gap-4 z-30 transition-all duration-700 -translate-x-[calc(50%-8px)] -translate-y-[calc(50%+8px)] group-hover:-translate-x-[calc(50%-80px)] group-hover:-translate-y-[calc(50%+80px)] group-hover:border-stone-400 dark:group-hover:border-stone-500/50">
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300/40 dark:via-white/20 to-transparent"></div>
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-700 dark:to-stone-800 border border-stone-300 dark:border-stone-600 flex items-center justify-center shrink-0 relative z-10 shadow-lg">
                                        <svg className="w-5 h-5 text-stone-900 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <span className="text-[10px] font-mono text-stone-900 dark:text-white uppercase tracking-widest font-semibold">Gateway</span>
                                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">200 OK</span>
                                        </div>
                                        <div className="w-full bg-stone-200 dark:bg-stone-800 h-1 rounded-full mt-2 overflow-hidden">
                                            <div className="h-full bg-stone-900 dark:bg-white w-[85%] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 4: Future Proofing */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="group relative rounded-2xl p-8 md:p-10 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#110f0e] overflow-hidden min-h-[420px] flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-colors duration-300 shadow-sm hover:shadow-md"
                    >
                        <div className="relative z-10">
                            <div className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-900 dark:text-stone-100">
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-3 tracking-tight">
                                Future Proofing
                            </h3>
                            <p className="text-stone-500 dark:text-stone-400 font-manrope font-light leading-relaxed max-w-sm text-sm md:text-base">
                                We experiment with the bleeding edge so you don't have to. RAG. Agents. Vision models. Production-ready tomorrow.
                            </p>
                        </div>

                        {/* Neural Orchestration Visualization */}
                        <div className="absolute right-0 bottom-0 left-0 h-[220px] bg-stone-100 dark:bg-[#0c0a09] border-t border-stone-200 dark:border-stone-800 transition-colors duration-300 overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]" style={{ backgroundImage: 'linear-gradient(#a8a29e 1px, transparent 1px), linear-gradient(90deg, #a8a29e 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                            <div className="absolute bottom-4 left-6 right-6 z-20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">Orchestration Log</span>
                                </div>
                                <div className="font-mono text-[10px] text-stone-500 dark:text-stone-400 space-y-1 opacity-70">
                                    <div className="flex justify-between"><span className="text-stone-800 dark:text-stone-200">&gt; init_agent_swarm(v4)</span> <span>2ms</span></div>
                                    <div className="flex justify-between"><span>&gt; connecting vector_db...</span> <span>OK</span></div>
                                    <div className="flex justify-between"><span>&gt; optimizing context_window</span> <span className="text-emerald-500">DONE</span></div>
                                </div>
                            </div>

                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] pointer-events-none" style={{ zIndex: 0 }}>
                                    <path d="M150 50 L50 20" stroke="currentColor" className="text-stone-300 dark:text-stone-700" strokeWidth="1" fill="none" />
                                    <circle cx="100" cy="35" r="2" className="fill-stone-400 animate-pulse" />
                                    <path d="M150 50 L250 20" stroke="currentColor" className="text-stone-300 dark:text-stone-700" strokeWidth="1" fill="none" />
                                    <circle cx="200" cy="35" r="2" className="fill-stone-400 animate-pulse" style={{ animationDelay: '1s' }} />
                                    <path d="M150 50 L150 90" stroke="currentColor" className="text-stone-300 dark:text-stone-700" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                                </svg>

                                <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-xl flex items-center justify-center z-10 group-hover:border-stone-400 transition-colors">
                                    <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white to-stone-50 dark:from-stone-900 dark:to-stone-950 border border-stone-200 dark:border-stone-700 shadow-sm transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-900 dark:text-stone-100 drop-shadow-sm">
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                            <path d="M7.5 4.21l4.5 2.6 4.5-2.6" />
                                            <path d="M7.5 19.79l4.5-2.6 4.5 2.6" />
                                            <path d="M12 6.81v10.38" />
                                            <path d="M3.29 7L12 12.03L20.71 7" />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-stone-900 rounded-full z-30"></div>
                                </div>

                                <div className="absolute -top-8 -left-28 w-24 px-2 py-1.5 rounded-lg bg-white/80 dark:bg-stone-900/80 backdrop-blur border border-stone-200 dark:border-stone-800 shadow-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    <span className="text-[9px] font-mono font-medium text-stone-600 dark:text-stone-300">Vision 2.0</span>
                                </div>
                                <div className="absolute -top-8 -right-28 w-24 px-2 py-1.5 rounded-lg bg-white/80 dark:bg-stone-900/80 backdrop-blur border border-stone-200 dark:border-stone-800 shadow-sm flex items-center gap-2 group-hover:-translate-x-2 transition-transform duration-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                    <span className="text-[9px] font-mono font-medium text-stone-600 dark:text-stone-300">Vector RAG</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
