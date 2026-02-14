'use client';

import { motion } from 'framer-motion';
import Confetti from '@/animations/Confetti';
import { useState, useEffect } from 'react';

export default function LoveProposal() {
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [clickCount, setClickCount] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const handleYesClick = () => {
        setShowConfetti(true);
        setAccepted(true);
        setClickCount((prev) => prev + 1);
    };

    const handleNoHover = () => {
        // Generate random position but keep within safe boundaries
        const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
        const buttonWidth = 200; // Approximate button width
        const maxX = Math.min(300, viewportWidth / 2 - 100); // Limit horizontal movement
        const maxY = 80; // Limit vertical movement

        const newX = (Math.random() - 0.5) * maxX;
        const newY = (Math.random() - 0.5) * maxY;

        setNoPosition({ x: newX, y: newY });
    };

    const handleNoClick = (e) => {
        // Prevent click and move button
        e.preventDefault();
        handleNoHover();
    };

    return (
        <section id="love-proposal" className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 bg-gradient-to-b from-[#fff0f3] to-white min-h-screen flex flex-col items-center justify-center w-full">
            <Confetti trigger={showConfetti} duration={5000} onComplete={() => setShowConfetti(false)} />

            <div className="max-w-4xl w-full mx-auto text-center px-4 flex flex-col items-center">
                {/* Bear GIF from reference code - switches on accepted state */}
                <motion.img
                    key={accepted ? 'bear-kiss' : 'bear-roses'}
                    src={
                        accepted
                            ? "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                            : "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                    }
                    alt={accepted ? "Bears kissing" : "Cute bear holding roses"}
                    className="h-[160px] sm:h-[190px] md:h-[210px] mb-6 sm:mb-8 rounded-3xl object-contain"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                />

                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#ff4d6d] mb-8 sm:mb-10 lg:mb-12 font-heading break-words"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {accepted ? 'You Said Yes! 💕' : 'I Love You! 💖'}
                </motion.h2>

                {!accepted ? (
                    <>
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 sm:mb-12 font-cursive break-words"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <br />
                            Will you accept my love?
                        </motion.p>

                        <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center min-h-[180px] w-full">
                            {/* Yes Button */}
                            <motion.button
                                onClick={handleYesClick}
                                className="relative px-12 py-4 bg-gradient-to-r from-[#ff4d6d] to-[#ff8fa3] text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl pointer-events-auto"
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: '0 0 30px rgba(255, 77, 109, 0.8)',
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Yes, I Love You Too! ❤️
                            </motion.button>

                            {/* No Button - Runs Away */}
                            <motion.button
                                onMouseEnter={handleNoHover}
                                onTouchStart={handleNoHover}
                                onClick={handleNoClick}
                                className="relative px-12 py-4 bg-gray-300 text-gray-700 font-bold text-xl rounded-full shadow-xl cursor-pointer pointer-events-auto"
                                animate={{
                                    x: noPosition.x,
                                    y: noPosition.y,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 25,
                                    mass: 1,
                                }}
                                whileHover={{
                                    scale: 0.9,
                                }}
                            >
                                No 💔
                            </motion.button>
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-6"
                    >
                        <div className="text-8xl mb-6">
                            {clickCount === 1 ? '💕' : clickCount === 2 ? '💖' : '💝'}
                        </div>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-cursive break-words">
                            You make me the happiest person alive!
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-body break-words">
                            I knew you'd say yes! We're perfect together! 💑
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
