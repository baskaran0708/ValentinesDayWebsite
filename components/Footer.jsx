'use client';

import { motion } from 'framer-motion';
import FloatingHearts from '@/animations/FloatingHearts';

export default function Footer() {
    return (
        <footer className="relative pt-20 pb-8 px-4 sm:px-6 mt-24 sm:mt-32 bg-gradient-to-t from-[#ff4d6d] via-[#ff8fa3] to-[#ffc2d1] overflow-hidden w-full flex flex-col items-center">
            {/* Background Hearts */}
            <div className="absolute inset-0 opacity-30">
                <FloatingHearts count={8} />
            </div>

            <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">
                {/* Main Message */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3
                        className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading"
                    >
                        Made with Love ❤️
                    </h3>
                    <p
                        className="text-lg md:text-xl text-white/90 font-cursive"
                    >
                        For the one who makes my heart smile every single day
                    </p>
                </motion.div>

                {/* Decorative Hearts */}
                <motion.div
                    className="flex justify-center gap-4 mb-6"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                            }}
                        >
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" opacity="0.8">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.p
                    className="text-white/70 text-sm font-body text-center w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    © 2026 Valentine's Day Special • Forever & Always 💕
                </motion.p>

                {/* Glowing Divider */}
                <motion.div
                    className="mt-6 h-1 w-32 mx-auto rounded-full bg-white/50"
                    animate={{
                        boxShadow: [
                            '0 0 10px rgba(255, 255, 255, 0.5)',
                            '0 0 20px rgba(255, 255, 255, 0.8)',
                            '0 0 10px rgba(255, 255, 255, 0.5)',
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </footer>
    );
}
