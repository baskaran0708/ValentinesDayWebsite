'use client';

import { useEffect, useState, useMemo } from 'react';

export default function HeartRain() {
    const [hearts, setHearts] = useState([]);

    // Memoize heart configuration to prevent recalculation
    const heartConfig = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({ // Reduced from 25 to 15
            id: i,
            left: Math.random() * 100,
            animationDuration: 8 + Math.random() * 6,
            delay: Math.random() * 5,
            size: 15 + Math.random() * 15,
            opacity: 0.3 + Math.random() * 0.4,
        }));
    }, []);

    useEffect(() => {
        setHearts(heartConfig);
    }, [heartConfig]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute animate-float-heart"
                    style={{
                        left: `${heart.left}%`,
                        top: '-50px',
                        animationDuration: `${heart.animationDuration}s`,
                        animationDelay: `${heart.delay}s`,
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'linear',
                        willChange: 'transform',
                    }}
                >
                    <svg
                        width={heart.size}
                        height={heart.size}
                        viewBox="0 0 24 24"
                        fill={`rgba(255, 77, 109, ${heart.opacity})`}
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
            ))}
        </div>
    );
}
