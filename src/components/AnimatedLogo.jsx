import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const AnimatedLogo = ({ className = "" }) => {
  const [isPlane, setIsPlane] = useState(false);

  useEffect(() => {
    // Delay the initial folding animation slightly
    const timer = setTimeout(() => {
      setIsPlane(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // -- STATE 1: THE BOX (Split into two triangles) --
  // Top-Left Plate
  const boxTop = "M 20 20 L 80 20 L 20 80 Z";
  // Bottom-Right Plate
  const boxBottom = "M 80 80 L 20 80 L 80 20 Z";

  // -- STATE 2: THE PLANE (Split into two wings) --
  // Top Wing
  const planeTop = "M 10 15 L 90 50 L 30 50 Z";
  // Bottom Wing
  const planeBottom = "M 10 85 L 30 50 L 90 50 Z";

  return (
    <div
        className={`relative flex items-center justify-center cursor-pointer group ${className || 'w-64 h-64'}`}
        onClick={() => setIsPlane(!isPlane)}
        title="Click to toggle fold"
        style={{ transform: 'rotate(-90deg)' }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        animate={isPlane ? "plane" : "box"}
      >
        {/* Top Plate */}
        <motion.path
          d={boxTop}
          variants={{
            box: { d: boxTop },
            plane: { d: planeTop }
          }}
          fill="currentColor"
          transition={{
            duration: 1.2,
            ease: [0.68, -0.6, 0.32, 1.6],
          }}
        />
        {/* Bottom Plate */}
        <motion.path
          d={boxBottom}
          variants={{
            box: { d: boxBottom },
            plane: { d: planeBottom }
          }}
          fill="currentColor"
          transition={{
            duration: 1.2,
            ease: [0.68, -0.6, 0.32, 1.6],
            delay: 0.05
          }}
        />
      </motion.svg>

      {/* Subtle hover drift when in plane mode */}
      {isPlane && (
        <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, 2, -2, 0], y: [0, -4, -2, 0] }}
            transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        />
      )}
    </div>
  );
};
