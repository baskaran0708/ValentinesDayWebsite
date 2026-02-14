'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

const HEART_PATH = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

export default function PandaKiss() {
    const [isKissing, setIsKissing] = useState(false);
    const [floatingHearts, setFloatingHearts] = useState([]);

    // Kiss burst every 5s (reduced frequency)
    useEffect(() => {
        const interval = setInterval(() => {
            setIsKissing(true);
            setTimeout(() => setIsKissing(false), 1200);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Optimized heart removal with useCallback
    const removeFloatingHeart = useCallback((id) => {
        setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
    }, []);

    // Ambient floating hearts - reduced spawn rate and max hearts
    useEffect(() => {
        const spawn = () => {
            const id = Date.now() + Math.random();
            const x = 15 + Math.random() * 70;
            const size = 12 + Math.random() * 16;
            const duration = 2.5 + Math.random() * 2;
            setFloatingHearts((prev) => [...prev.slice(-5), { id, x, size, duration }]); // Max 6 hearts
        };
        spawn();
        const interval = setInterval(spawn, 3000); // Reduced spawn rate
        return () => clearInterval(interval);
    }, []);

    // Memoize kiss burst hearts configuration
    const kissBurstHearts = useMemo(() => {
        return [...Array(8)].map((_, i) => { // Reduced from 10 to 8
            const angle = (i / 8) * Math.PI * 2 + Math.PI / 2;
            const dist = 72 + (i % 3) * 12;
            const tx = Math.cos(angle) * dist;
            const ty = -Math.sin(angle) * dist - 20;
            return { i, tx, ty };
        });
    }, []);

    return (
        <section className="relative py-24 sm:py-36 px-4 sm:px-6 bg-gradient-to-b from-white to-[#fff0f3] overflow-hidden w-full flex flex-col items-center">
            <div className="max-w-4xl w-full mx-auto text-center">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff4d6d] mb-8 sm:mb-12 font-heading break-words"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Love Story 🐼💕
                </motion.h2>

                {/* Scene: panda holding bouquet + hearts */}
                <div className="relative flex items-center justify-center min-h-[320px] sm:min-h-[380px] md:min-h-[420px]">
                    {/* Ambient floating hearts - AnimatePresence for smooth enter/exit */}
                    <div className="absolute inset-0 pointer-events-none">
                        <AnimatePresence mode="popLayout">
                            {floatingHearts.map((heart) => (
                                <motion.div
                                    key={heart.id}
                                    className="absolute bottom-0"
                                    style={{ left: `${heart.x}%`, willChange: 'transform, opacity' }}
                                    initial={{ y: 0, opacity: 0, scale: 0.3 }}
                                    animate={{
                                        y: -320,
                                        opacity: [0, 0.7, 0.7, 0],
                                        scale: [0.3, 1, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: heart.duration,
                                        ease: 'easeOut',
                                        opacity: { times: [0, 0.15, 0.85, 1] },
                                    }}
                                    onAnimationComplete={() => removeFloatingHeart(heart.id)}
                                >
                                    <svg
                                        width={heart.size}
                                        height={heart.size}
                                        viewBox="0 0 24 24"
                                        fill="#ff8fa3"
                                        stroke="#ff4d6d"
                                        strokeWidth="0.5"
                                    >
                                        <path d={HEART_PATH} />
                                    </svg>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Kiss burst hearts - AnimatePresence for realistic burst then exit */}
                    <AnimatePresence>
                        {isKissing && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                initial={false}
                            >
                                {kissBurstHearts.map(({ i, tx, ty }) => (
                                    <motion.div
                                        key={i}
                                        className="absolute"
                                        style={{ willChange: 'transform, opacity' }}
                                        initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                                        animate={{
                                            x: tx,
                                            y: ty,
                                            scale: [0, 1.2, 1],
                                            opacity: [1, 1, 0],
                                        }}
                                        transition={{
                                            duration: 1.1,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            opacity: { times: [0, 0.6, 1] },
                                        }}
                                    >
                                        <svg
                                            width={22}
                                            height={22}
                                            viewBox="0 0 24 24"
                                            fill="#ff4d6d"
                                            style={{ filter: 'drop-shadow(0 2px 4px rgba(255,77,109,0.4))' }}
                                        >
                                            <path d={HEART_PATH} />
                                        </svg>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Panda image */}
                    <motion.div
                        className="relative z-10 w-[200px] h-[220px] sm:w-[250px] sm:h-[270px] md:w-[300px] md:h-[320px]"
                        style={{ willChange: 'transform' }}
                        animate={{
                            y: [0, -6, 0],
                            scale: isKissing ? [1, 1.03, 1] : 1,
                        }}
                        transition={{
                            y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                            scale: { duration: 0.4 },
                        }}
                    >
                        <Image
                            src="/GalleryImages/OIP.webp"
                            alt="Cute Panda"
                            fill
                            className="object-contain drop-shadow-lg"
                            priority
                            quality={90}
                        />
                    </motion.div>
                </div>

                <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-10 sm:mt-14 px-4 max-w-2xl mx-auto font-cursive break-words leading-relaxed text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                </motion.p>
                <p>                        <i> Like these adorable pandas, we are meant to be together forever 💑</i></p>
            </div>
        </section>
    );
}
