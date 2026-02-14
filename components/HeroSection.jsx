'use client';

import { motion } from 'framer-motion';
import Sparkles from '../animations/Sparkles';
import FloatingHearts from '../animations/FloatingHearts';

export default function HeroSection() {
    const scrollToContent = () => {
        const loveProposalSection = document.getElementById('love-proposal');
        if (loveProposalSection) {
            loveProposalSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-32 w-full">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d] via-[#ff8fa3] via-[#ffc2d1] to-[#fff0f3]" />

            {/* Floating Hearts */}
            <FloatingHearts count={12} />

            {/* Sparkles */}
            <Sparkles count={15} />

            {/* Content */}
            <motion.div
                className="relative z-20 text-center px-4 md:px-6 w-full flex flex-col items-center justify-center -mt-8 sm:-mt-12 md:-mt-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                {/* Main Title */}
                <div className="mb-8 md:mb-10 lg:mb-12">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center w-full font-heading break-words mb-2 md:mb-3"
                        style={{ fontSize: 'clamp(2rem, 5vw + 1.5rem, 4.5rem)', lineHeight: '1.1' }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Happy Valentine's Day
                    </motion.h1>
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center w-full font-heading break-words mt-2 md:mt-4"
                        style={{ fontSize: 'clamp(2rem, 5vw + 1.5rem, 4.5rem)', lineHeight: '1.1' }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        My Love ❤️
                    </motion.h1>
                </div>
                <br />
                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed text-center w-full font-cursive break-words"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    You make every moment magical, every day special, and my heart forever yours
                </motion.p>
                <br />

                {/* CTA Button */}
                <motion.button
                    onClick={scrollToContent}
                    className="relative px-10 py-5 bg-white text-[#ff4d6d] font-semibold text-lg rounded-full shadow-2xl hover:scale-110 transition-all duration-300 mx-auto font-body"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    whileHover={{
                        boxShadow: '0 0 30px rgba(255, 77, 109, 0.8), 0 0 60px rgba(255, 143, 163, 0.5)',
                    }}
                >
                    <motion.span
                        animate={{
                            textShadow: [
                                '0 0 10px rgba(255, 77, 109, 0)',
                                '0 0 20px rgba(255, 77, 109, 0.8)',
                                '0 0 10px rgba(255, 77, 109, 0)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Open My Heart 💖
                    </motion.span>
                </motion.button>
            </motion.div>

            {/* Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    className="w-full h-24"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        fill="#ffffff"
                        fillOpacity="0.5"
                    />
                </svg>
            </div>
        </section>
    );
}
