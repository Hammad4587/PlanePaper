import React from 'react';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-[#FAFAF9] dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-stone-200 selection:text-black overflow-x-hidden transition-colors duration-300">
            <CustomCursor />
            <div className="bg-grain"></div>
            {children}
        </div>
    );
};

export default Layout;
