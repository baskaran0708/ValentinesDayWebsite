'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SecretMessage() {
    const [isOpen, setIsOpen] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [isPulsing, setIsPulsing] = useState(true);

    const secretMessage = `Every time I see you smile, my heart skips a beat.
  
Every moment with you is a treasure I hold close to my heart.

You are my best friend, my soulmate, my everything.

I promise to love you today, tomorrow, and forever.

Thank you for being the most amazing person in my life. 💖`;

    useEffect(() => {
        if (isOpen) {
            setIsPulsing(false);
            let index = 0;
            setDisplayedText('');
            const interval = setInterval(() => {
                if (index < secretMessage.length) {
                    setDisplayedText((prev) => prev + secretMessage[index]);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 30);

            return () => clearInterval(interval);
        }
    }, [isOpen, secretMessage]);

    return (
        <>
            {/* Floating Secret Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed top-1/2 right-4 sm:right-6 transform -translate-y-1/2 z-40 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ff4d6d] to-[#ff8fa3] rounded-full shadow-2xl flex items-center justify-center text-2xl sm:text-3xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={
                    isPulsing
                        ? {
                            scale: [1, 1.2, 1],
                            boxShadow: [
                                '0 0 20px rgba(255, 77, 109, 0.6)',
                                '0 0 40px rgba(255, 77, 109, 1)',
                                '0 0 20px rgba(255, 77, 109, 0.6)',
                            ],
                        }
                        : {}
                }
                transition={{ duration: 2, repeat: isPulsing ? Infinity : 0 }}
            >
                💌
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative glass-strong rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-[0_0_50px_rgba(255,77,109,0.5)]"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: 'spring', damping: 25 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-[#ff4d6d] transition-colors"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Title */}
                            <motion.h3
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff4d6d] mb-4 sm:mb-6 text-center font-heading break-words"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Secret Message 🤫💕
                            </motion.h3>

                            {/* Message */}
                            <div className="bg-white/60 rounded-2xl p-6">
                                <p className="text-base sm:text-lg md:text-xl text-gray-800 whitespace-pre-line leading-relaxed font-cursive break-words">
                                    {displayedText}
                                    {displayedText.length < secretMessage.length && (
                                        <motion.span
                                            className="inline-block w-1 h-6 bg-[#ff4d6d] ml-1"
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                        />
                                    )}
                                </p>
                            </div>

                            {/* Heart Decoration */}
                            <div className="flex justify-center mt-6">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#ff4d6d">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
