'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Sparkles({ count = 20 }) {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const sparkleArray = Array.from({ length: count }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 1 + Math.random() * 2,
        }));
        setSparkles(sparkleArray);
    }, [count]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute"
                    style={{
                        left: `${sparkle.left}%`,
                        top: `${sparkle.top}%`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        delay: sparkle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="#ffd700"
                        opacity="0.8"
                    >
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
