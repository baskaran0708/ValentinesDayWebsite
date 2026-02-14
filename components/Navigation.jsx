'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Our Story', href: '/timeline' },
        { name: 'Photo Album', href: '/album' },
        { name: 'Love Quiz', href: '/quiz' },
    ];

    return (
        <>
            {/* Desktop Navigation - Bottom Left Corner (above music player area) */}
            <motion.nav
                className="hidden md:flex fixed left-4 sm:left-6 bottom-6 z-50 glass-card px-4 py-3 rounded-2xl shadow-xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="flex items-center gap-3">
                    {navItems.map((item, index) => (
                        <Link key={item.href} href={item.href}>
                            <motion.div
                                className="px-3 py-1.5 text-sm text-gray-700 hover:text-[#ff4d6d] font-medium transition-colors cursor-pointer rounded-lg hover:bg-white/50"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="whitespace-nowrap">{item.name}</span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.nav>

            {/* Mobile Navigation Button */}
            <motion.button
                className="md:hidden fixed top-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#ff4d6d] to-[#ff8fa3] rounded-full shadow-2xl flex items-center justify-center text-white"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
            </motion.button>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        className="absolute top-24 right-6 glass-strong rounded-2xl p-6 min-w-[200px]"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                <div
                                    className="flex items-center gap-3 py-3 text-gray-700 hover:text-[#ff4d6d] font-medium transition-colors text-base sm:text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
