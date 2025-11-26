import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 1200; // 1.2 seconds to reach 100%
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const percentage = Math.min(Math.round((elapsed / duration) * 100), 100);
            setProgress(percentage);

            if (percentage >= 100) {
                clearInterval(interval);
                // Wait a bit, then trigger the shutter up animation
                setTimeout(() => {
                    onComplete();
                }, 100);
            }
        }, 16); // ~60fps

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-stone-900 flex items-center justify-center"
        >
            <div className="flex flex-col items-center gap-4">
                <div className="font-manrope text-6xl md:text-8xl font-bold tracking-tighter text-stone-100">
                    {progress}%
                </div>
                <div className="w-32 h-[1px] bg-stone-700 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-stone-200"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
