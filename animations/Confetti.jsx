'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Confetti({ trigger = false, onComplete }) {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        if (trigger) {
            const confettiArray = Array.from({ length: 50 }, (_, i) => ({
                id: i,
                x: Math.random() * window.innerWidth,
                y: window.innerHeight / 2,
                color: ['#ff4d6d', '#ff8fa3', '#ffc2d1', '#e0b0ff', '#ffd700'][
                    Math.floor(Math.random() * 5)
                ],
                rotation: Math.random() * 360,
            }));
            setParticles(confettiArray);

            // Clear after animation
            setTimeout(() => {
                setParticles([]);
                if (onComplete) onComplete();
            }, 3000);
        }
    }, [trigger, onComplete]);

    if (particles.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        backgroundColor: particle.color,
                    }}
                    initial={{
                        opacity: 1,
                        scale: 1,
                        rotate: particle.rotation,
                    }}
                    animate={{
                        y: [0, -200, window.innerHeight],
                        x: [0, (Math.random() - 0.5) * 300],
                        opacity: [1, 1, 0],
                        rotate: [particle.rotation, particle.rotation + 720],
                    }}
                    transition={{
                        duration: 3,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </div>
    );
}
