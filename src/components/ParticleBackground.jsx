import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ className = '' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let w, h;
        let particles = [];
        const mouse = { x: -9999, y: -9999 };
        let animationFrameId;

        const init = () => {
            // Set canvas size to match its display size
            const rect = canvas.getBoundingClientRect();
            w = canvas.width = rect.width;
            h = canvas.height = rect.height;

            // Only create particles if we have valid dimensions
            if (w > 0 && h > 0) {
                // Create particles based on canvas size
                const particleCount = Math.floor((w * h) / 18000);
                particles = Array.from({ length: Math.max(particleCount, 20) }, () => ({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    s: Math.random() * 1.5 + 0.5
                }));
            }
        };

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = '#1c1917';
            ctx.globalAlpha = 0.6;

            particles.forEach(pt => {
                // Update position
                pt.x += pt.vx;
                pt.y += pt.vy;

                // Bounce off walls
                if (pt.x < 0 || pt.x > w) pt.vx *= -1;
                if (pt.y < 0 || pt.y > h) pt.vy *= -1;

                // Mouse repulsion
                const dx = mouse.x - pt.x;
                const dy = mouse.y - pt.y;
                const d = Math.sqrt(dx * dx + dy * dy);

                if (d < 140) {
                    const a = Math.atan2(dy, dx);
                    const f = (140 - d) / 140;
                    pt.x -= Math.cos(a) * f * 2;
                    pt.y -= Math.sin(a) * f * 2;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, pt.s, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Add event listeners
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        // Initialize with a slight delay to ensure canvas is mounted
        const timeoutId = setTimeout(() => {
            init();
            animate();
        }, 0);

        // Cleanup
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ display: 'block' }}
            />
        </div>
    );
};

export default ParticleBackground;
