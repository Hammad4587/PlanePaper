import React from 'react';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-[#FAFAF9] text-stone-900 font-sans selection:bg-stone-200 selection:text-black overflow-x-hidden">
            <CustomCursor />
            <div className="bg-grain"></div>
            {children}
        </div>
    );
};

export default Layout;
