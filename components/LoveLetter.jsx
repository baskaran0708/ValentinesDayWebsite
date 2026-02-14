'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const LOVE_MESSAGE = `My Dearest Love,

Every day with you feels like a beautiful dream I never want to wake up from. Your smile lights up my world, your laughter is my favorite melody, and your love is the greatest gift I've ever received.

Thank you for being my partner, my best friend, and my everything. No matter where life takes us, my heart will always belong to you.

Forever and always,
Your Valentine 💕`;

export default function LoveLetter() {
    const [isOpen, setIsOpen] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [showLetter, setShowLetter] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const [particles, setParticles] = useState([]);

    // Generate particles only on client side to avoid hydration errors
    useEffect(() => {
        const hearts = ['💕', '💖', '💗', '💝', '❤️'];
        const newParticles = [...Array(15)].map((_, i) => {
            const duration = 15 + Math.random() * 10;
            const delay = Math.random() * 20;
            return {
                id: i,
                left: `${Math.random() * 100}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                duration,
                delay,
                heart: hearts[Math.floor(Math.random() * 5)]
            };
        });
        setParticles(newParticles);
    }, []);

    // Auto-open envelope when in view (with delay)
    useEffect(() => {
        if (isInView && !isOpen) {
            const t = setTimeout(() => setIsOpen(true), 800);
            return () => clearTimeout(t);
        }
    }, [isInView, isOpen]);

    // Show letter content after envelope opens
    useEffect(() => {
        if (isOpen) {
            const t = setTimeout(() => setShowLetter(true), 400);
            return () => clearTimeout(t);
        } else {
            setShowLetter(false);
        }
    }, [isOpen]);

    // Typewriter effect – use ref to avoid dependency on string
    useEffect(() => {
        if (!showLetter) {
            setDisplayedText('');
            return;
        }
        let index = 0;
        const interval = setInterval(() => {
            if (index < LOVE_MESSAGE.length) {
                setDisplayedText(LOVE_MESSAGE.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 28);
        return () => clearInterval(interval);
    }, [showLetter]);

    return (
        <section
            ref={ref}
            className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#fff0f3] min-h-screen flex flex-col items-center justify-center w-full overflow-hidden"
        >
            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 gradient-mesh" />

            {/* Shimmer Overlay */}
            <div className="absolute inset-0 shimmer opacity-40" />

            {/* Floating Heart Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="floating-particle text-2xl"
                    style={{
                        left: particle.left,
                        animationDelay: particle.animationDelay,
                        animationDuration: particle.animationDuration,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0.6, 0] }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                >
                    {particle.heart}
                </motion.div>
            ))}

            <div className="max-w-4xl w-full mx-auto text-center relative z-10">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff4d6d] mb-10 sm:mb-16 font-heading break-words"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    A Letter From My Heart 💌
                </motion.h2>

                {/* Envelope + Letter container – perspective for 3D flap */}
                <div
                    className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[540px]"
                    style={{ perspective: '1200px' }}
                >
                    {/* Envelope body (back) - Enhanced with glow - Positioned on top */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-72 sm:w-80 md:w-96 h-40 sm:h-48 rounded-b-lg z-30"
                        initial={{ opacity: 0, scale: 0.92, y: 16 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            boxShadow: isOpen
                                ? '0 25px 60px -12px rgba(255, 77, 109, 0.6), 0 0 40px rgba(255, 143, 163, 0.4)'
                                : '0 20px 50px -12px rgba(255, 77, 109, 0.4), 0 0 0 1px rgba(255,255,255,0.25) inset'
                        }}
                        transition={{ duration: 0.5 }}
                        style={{
                            top: '10%',
                            background: 'linear-gradient(165deg, #ffb3c6 0%, #ff8fa3 45%, #ff7a93 100%)',
                            zIndex: isOpen ? 5 : 30,
                        }}
                    />

                    {/* Envelope flap (triangle shape, opens with enhanced 3D) */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-72 sm:w-80 md:w-96 h-24 sm:h-28 origin-bottom z-40"
                        initial={{ rotateX: 0 }}
                        animate={{
                            rotateX: isOpen ? -180 : 0,
                            filter: isOpen ? 'brightness(1.2)' : 'brightness(1)'
                        }}
                        transition={{ duration: 0.85, ease: [0.34, 1.2, 0.64, 1] }}
                        style={{
                            top: 'calc(10% - 40px)',
                            background: 'linear-gradient(180deg, #ff9aad 0%, #ff8fa3 60%, #ff7a93 100%)',
                            clipPath: 'polygon(0 100%, 50% 0%, 100% 100%)',
                            boxShadow: isOpen
                                ? '0 -5px 30px rgba(255, 77, 109, 0.5)'
                                : '0 -2px 20px rgba(0,0,0,0.08)',
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                            zIndex: isOpen ? 6 : 40,
                        }}
                    />

                    {/* Wax seal with enhanced animation */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 z-50 rounded-full flex items-center justify-center"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{
                            scale: isOpen ? 0 : 1,
                            opacity: isOpen ? 0 : 1,
                            rotate: isOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        style={{
                            width: 44,
                            height: 44,
                            top: 'calc(10% - 12px)',
                            background: 'linear-gradient(145deg, #c41e3a 0%, #8b0000 100%)',
                            boxShadow: '0 4px 16px rgba(139,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)',
                        }}
                    >
                        <span className="text-lg">❤️</span>
                    </motion.div>

                    {/* Letter – Premium Glassmorphic Card with Staggered Text */}
                    <AnimatePresence>
                        {showLetter && (
                            <motion.div
                                className="absolute left-1/2 -translate-x-1/2 w-72 sm:w-80 md:w-96 rounded-3xl overflow-hidden glass-premium shadow-2xl z-10"
                                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 20, opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
                                style={{
                                    top: '20%',
                                    maxHeight: 420,
                                }}
                            >
                                {/* Gradient overlay for depth */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 0%, rgba(255, 77, 109, 0.1) 0%, transparent 70%)',
                                    }}
                                />

                                {/* Subtle lined paper effect */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-30"
                                    style={{
                                        backgroundImage: `repeating-linear-gradient(
                                            transparent,
                                            transparent 29px,
                                            rgba(255, 105, 135, 0.15) 29px,
                                            rgba(255, 105, 135, 0.15) 30px
                                        )`,
                                        backgroundPosition: '0 14px',
                                    }}
                                />

                                <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full overflow-y-auto">
                                    <div className="text-center text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-cursive break-words min-h-[320px]">
                                        {displayedText.split(' ').map((word, index) => (
                                            <motion.span
                                                key={index}
                                                className="inline-block mr-1"
                                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.03,
                                                    ease: [0.25, 0.46, 0.45, 0.94]
                                                }}
                                            >
                                                {word === '\n\n' ? <><br /><br /></> : word}
                                            </motion.span>
                                        ))}
                                        {displayedText.length < LOVE_MESSAGE.length && (
                                            <motion.span
                                                animate={{ opacity: [1, 0.35, 1] }}
                                                transition={{ duration: 0.65, repeat: Infinity }}
                                                className="inline-block w-0.5 h-4 sm:h-5 bg-[#ff4d6d] ml-0.5 align-middle"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Bottom gradient shadow */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-8"
                                    style={{
                                        background: 'linear-gradient(180deg, transparent, rgba(255, 77, 109, 0.08))',
                                    }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Hint when envelope not yet open */}
                <AnimatePresence>
                    {!isOpen && isInView && (
                        <motion.p
                            className="mt-6 text-[#ff4d6d]/70 text-sm font-body"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Scroll to read the letter...
                        </motion.p>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
