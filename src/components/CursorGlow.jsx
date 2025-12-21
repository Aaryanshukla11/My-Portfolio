import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <motion.div
            style={{
                translateX: springX,
                translateY: springY,
            }}
            className="fixed top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        />
    );
};

export default CursorGlow;
