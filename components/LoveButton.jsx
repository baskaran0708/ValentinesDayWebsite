'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Confetti from '../animations/Confetti';

export default function LoveButton() {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [showConfetti, setShowConfetti] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleYesClick = () => {
        setShowConfetti(true);
        setClickCount((prev) => prev + 1);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    const handleNoHover = () => {
        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 100;

        const randomX = Math.random() * maxX - maxX / 2;
        const randomY = Math.random() * maxY - maxY / 2;

        setNoButtonPosition({ x: randomX, y: randomY });
    };

    return (
        <section className="relative py-20 px-6 bg-gradient-to-b from-white to-[#fff0f3] overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-[#ff4d6d] mb-8"
                    style={{ fontFamily: 'Pacifico, cursive' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    A Question For You 💭
                </motion.h2>

                <motion.p
                    className="text-2xl md:text-3xl text-gray-700 mb-12"
                    style={{ fontFamily: 'Great Vibes, cursive' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    Do You Love Me?
                </motion.p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* YES Button */}
                    <motion.button
                        onClick={handleYesClick}
                        className="relative px-12 py-4 bg-gradient-to-r from-[#ff4d6d] to-[#ff8fa3] text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(255, 77, 109, 0.5)',
                                '0 0 40px rgba(255, 77, 109, 0.8)',
                                '0 0 20px rgba(255, 77, 109, 0.5)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Yes, I Do! ❤️
                    </motion.button>

                    {/* NO Button (runs away on hover) */}
                    <motion.button
                        onMouseEnter={handleNoHover}
                        onTouchStart={handleNoHover}
                        className="relative px-12 py-4 bg-gray-300 text-gray-700 font-bold text-xl rounded-full shadow-lg select-none"
                        animate={{
                            x: noButtonPosition.x,
                            y: noButtonPosition.y,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        No 💔
                    </motion.button>
                </div>

                {/* Success Message */}
                {clickCount > 0 && (
                    <motion.p
                        className="mt-8 text-xl md:text-2xl text-[#ff4d6d] font-semibold"
                        style={{ fontFamily: 'Great Vibes, cursive' }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        Yay! Love you too! 💕✨ {clickCount > 1 && `(× ${clickCount})`}
                    </motion.p>
                )}
            </div>

            {/* Confetti Effect */}
            <Confetti trigger={showConfetti} />
        </section>
    );
}
