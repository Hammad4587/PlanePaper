import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import LightLogo from '../assets/Light - Logo.svg';
import DarkLogo from '../assets/Dark - Logo.svg';
import LightMobile from '../assets/Light.svg';
import DarkMobile from '../assets/Dark.svg';

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const toggleDarkMode = () => {
        const html = document.documentElement;
        html.classList.toggle('dark');
        const newIsDark = html.classList.contains('dark');
        setIsDark(newIsDark);
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="fixed z-40 top-0 left-0 right-0 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/50 dark:bg-stone-950/80 dark:border-stone-800">
            <div className="flex h-20 max-w-[90rem] mx-auto px-6 items-center justify-between">
                <Link to="/" className="hoverable-element">
                    {/* Mobile: full logo */}
                    <img src={LightLogo} alt="PlanePaper" className="block md:hidden dark:hidden h-8" />
                    <img src={DarkLogo} alt="PlanePaper" className="hidden dark:block md:dark:hidden h-8" />
                    {/* Desktop: compact logo */}
                    <img src={LightMobile} alt="PlanePaper" className="hidden md:block dark:hidden h-8" />
                    <img src={DarkMobile} alt="PlanePaper" className="hidden md:dark:block h-8" />
                </Link>

                {/* Desktop nav links */}
                <div className="hidden md:flex text-sm font-medium text-stone-500 translate-x-16 gap-x-8 items-center">
                    <a href="/#services" className="transition-colors hoverable-element font-manrope hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100">
                        Services
                    </a>
                    <a href="/#work" className="transition-colors hoverable-element hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 font-manrope">
                        Blueprint
                    </a>
                    <a href="/#pricing" className="transition-colors hoverable-element font-manrope hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100">
                        Pricing
                    </a>
                </div>

                {/* Desktop right side */}
                <div className="hidden md:flex items-center gap-2">
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        aria-label="Toggle Dark Mode"
                        className="mr-4 p-2 rounded-full border border-transparent hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400 transition-all hoverable-element group"
                    >
                        {isDark ? (
                            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2" />
                                <path d="M12 20v2" />
                                <path d="m4.93 4.93 1.41 1.41" />
                                <path d="m17.66 17.66 1.41 1.41" />
                                <path d="M2 12h2" />
                                <path d="M20 12h2" />
                                <path d="m6.34 17.66-1.41 1.41" />
                                <path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>
                        )}
                    </button>

                    {/* Animated Button */}
                    <a href="/#contact" className="inline-flex btn-wrapper hoverable-element">
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
                            <span className="btn-text font-manrope">Book a Call</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform group-hover:text-stone-200">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </div>
                    </a>
                </div>

                {/* Mobile hamburger button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="md:hidden p-2 rounded-lg text-stone-700 dark:text-stone-300 hoverable-element"
                >
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className={`md:hidden absolute top-20 left-0 right-0 bg-[#FAFAF9]/95 dark:bg-stone-950/95 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
            >
                <div className="px-6 py-6 flex flex-col gap-1">
                    <a
                        href="#services"
                        onClick={closeMenu}
                        className="block py-3 px-4 rounded-lg text-base font-medium font-manrope text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
                    >
                        Services
                    </a>
                    <a
                        href="#work"
                        onClick={closeMenu}
                        className="block py-3 px-4 rounded-lg text-base font-medium font-manrope text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
                    >
                        Blueprint
                    </a>
                    <a
                        href="#pricing"
                        onClick={closeMenu}
                        className="block py-3 px-4 rounded-lg text-base font-medium font-manrope text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
                    >
                        Pricing
                    </a>

                    <div className="h-px bg-stone-200 dark:bg-stone-800 my-3"></div>

                    {/* Dark mode toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="flex items-center gap-3 py-3 px-4 rounded-lg text-base font-medium font-manrope text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors w-full text-left"
                    >
                        {isDark ? (
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2" />
                                <path d="M12 20v2" />
                                <path d="m4.93 4.93 1.41 1.41" />
                                <path d="m17.66 17.66 1.41 1.41" />
                                <path d="M2 12h2" />
                                <path d="M20 12h2" />
                                <path d="m6.34 17.66-1.41 1.41" />
                                <path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>
                        )}
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                    </button>

                    {/* Book a Call button */}
                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-base font-semibold font-manrope bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 hover:opacity-90 transition-opacity"
                    >
                        <Calendar size={16} />
                        Book a Call
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
