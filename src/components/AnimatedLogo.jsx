import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedLogo = ({
    className = "",
    width = 100,
    height = 100,
    color = "black",
    delay = 0
}) => {

    // We simulate a fold by splitting the square into two halves (Left and Right).
    // They start as two rectangles side-by-side forming a square.
    // They fold into two triangles forming the paper plane.

    // --- SQUARE STATE ---
    // A 50x50 square centered at (50,50), so from 25 to 75.
    // Left Half of Square
    const leftSquare = "M 25 25 L 50 25 L 50 75 L 25 75 Z";
    // Right Half of Square
    const rightSquare = "M 50 25 L 75 25 L 75 75 L 50 75 Z";

    // --- PLANE STATE ---
    // Tip at (50,15), Tail center at (50,65), Wings wide at y=80
    // Left Wing
    const leftWing = "M 50 15 L 50 65 L 15 80 Z";
    // Right Wing
    const rightWing = "M 50 15 L 85 80 L 50 65 Z";

    const containerVariants = {
        initial: {
            y: 0,
            opacity: 1,
            scale: 1,
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0
            }
        }
    };

    // Shadow to create depth during the fold
    // The right wing will be slightly darker in "plane" mode to simulate lighting
    const leftPathVariants = {
        initial: { d: leftSquare, fill: color },
        animate: {
            d: [leftSquare, leftSquare, leftWing],
            transition: {
                duration: 2,
                times: [0, 0.3, 1], // Wait, then Fold
                ease: "easeInOut",
                fill: { duration: 0 } // Keep color constant
            }
        }
    };

    const rightPathVariants = {
        initial: { d: rightSquare, fillOpacity: 1 },
        animate: {
            d: [rightSquare, rightSquare, rightWing],
            fillOpacity: [1, 1, 0.7], // Darken slightly on fold for 3D effect
            transition: {
                duration: 2,
                times: [0, 0.3, 1],
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <motion.svg
                width={width}
                height={height}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="initial"
                animate="animate"
                variants={containerVariants}
                style={{ originX: 0.5, originY: 0.5 }}
            >
                {/* Left Half */}
                <motion.path
                    variants={leftPathVariants}
                    fill={color}
                />

                {/* Right Half */}
                <motion.path
                    variants={rightPathVariants}
                    fill={color}
                />

                {/* Center Crease Highlight (Optional, adds a nice spine) */}
                <motion.line
                    x1="50" y1="25" x2="50" y2="75"
                    stroke="white"
                    strokeWidth="0.5"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0, 0.5, 0], // Flash the crease during fold
                        y1: [25, 25, 15],
                        y2: [75, 75, 65]
                    }}
                    transition={{
                        duration: 2,
                        times: [0, 0.3, 1],
                    }}
                />
            </motion.svg>
        </div>
    );
};
