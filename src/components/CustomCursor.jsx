import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        const onMouseMove = (e) => {
            if (dot) {
                dot.style.left = `${e.clientX}px`;
                dot.style.top = `${e.clientY}px`;
            }
            if (ring) {
                ring.style.left = `${e.clientX}px`;
                ring.style.top = `${e.clientY}px`;
            }
        };

        const onMouseEnter = () => document.body.classList.add('hovering');
        const onMouseLeave = () => document.body.classList.remove('hovering');

        document.addEventListener('mousemove', onMouseMove);

        // Add hover listeners to interactive elements
        // We need to delegate or re-attach when DOM changes. 
        // For simplicity in React, we can use a global listener or just rely on CSS 'hoverable-element' class 
        // if we add it to all links. 
        // Or better, we can listen to mouseover and check target.

        const onMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, .hoverable-element, .group')) {
                document.body.classList.add('hovering');
            } else {
                document.body.classList.remove('hovering');
            }
        };

        document.addEventListener('mouseover', onMouseOver);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={ringRef} className="cursor-ring"></div>
        </>
    );
};

export default CustomCursor;
