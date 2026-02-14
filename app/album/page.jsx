'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeartRain from '@/components/HeartRain';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function AlbumPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const photos = [
        { id: 1, title: 'Sunset Together', color: 'from-orange-400 to-pink-400', date: 'Summer 2024' },
        { id: 2, title: 'Coffee Dates', color: 'from-amber-400 to-orange-400', date: 'Spring 2024' },
        { id: 3, title: 'Adventure Time', color: 'from-green-400 to-blue-400', date: 'Fall 2024' },
        { id: 4, title: 'City Nights', color: 'from-indigo-400 to-purple-400', date: 'Winter 2024' },
        { id: 5, title: 'Beach Memories', color: 'from-cyan-400 to-blue-400', date: 'Summer 2024' },
        { id: 6, title: 'Mountain Views', color: 'from-green-500 to-emerald-400', date: 'Fall 2024' },
        { id: 7, title: 'Romantic Dinner', color: 'from-red-400 to-pink-400', date: 'Winter 2025' },
        { id: 8, title: 'Park Picnic', color: 'from-lime-400 to-green-400', date: 'Spring 2025' },
        { id: 9, title: 'Stargazing', color: 'from-purple-500 to-pink-400', date: 'Summer 2025' },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#fff0f3] to-white flex flex-col">
            <HeartRain />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff4d6d] mb-4 sm:mb-6 font-heading break-words"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Photo Album 📸
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-700 font-cursive break-words"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Capturing precious moments, one memory at a time
                    </motion.p>
                </div>
            </section>

            {/* Photo Grid */}
            <section className="relative py-12 sm:py-20 px-4 sm:px-6 pb-24 sm:pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {photos.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                className="group cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                onClick={() => setSelectedImage(photo)}
                            >
                                <div className="bg-white p-5 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,77,109,0.6)] transition-all duration-300">
                                    {/* Photo Frame */}
                                    <div className={`relative aspect-square rounded-xl bg-gradient-to-br ${photo.color} overflow-hidden`}>
                                        {/* Animated Hearts Pattern */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {[...Array(12)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute"
                                                    style={{
                                                        left: `${Math.random() * 100}%`,
                                                        top: `${Math.random() * 100}%`,
                                                    }}
                                                    animate={{
                                                        scale: [1, 1.5, 1],
                                                        rotate: [0, 180, 360],
                                                        opacity: [0.2, 0.5, 0.2],
                                                    }}
                                                    transition={{
                                                        duration: 3 + Math.random() * 2,
                                                        repeat: Infinity,
                                                        delay: Math.random() * 2,
                                                    }}
                                                >
                                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                    </svg>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Center Heart */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                    rotate: [0, -5, 5, 0],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <svg width="80" height="80" viewBox="0 0 24 24" fill="rgba(255,255,255,0.9)">
                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Caption */}
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 font-heading break-words">
                                            {photo.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm font-body">{photo.date}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for selected image */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        className="relative bg-white p-8 rounded-3xl max-w-2xl mx-4 shadow-2xl"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-[#ff4d6d] rounded-full text-white flex items-center justify-center hover:scale-110 transition-transform"
                        >
                            ✕
                        </button>
                        <div className={`aspect-square rounded-2xl bg-gradient-to-br ${selectedImage.color} mb-6`}>
                            <div className="w-full h-full flex items-center justify-center">
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#ff4d6d] mb-2 font-heading break-words">
                            {selectedImage.title}
                        </h2>
                        <p className="text-center text-gray-600 font-body">{selectedImage.date}</p>
                    </motion.div>
                </motion.div>
            )}

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
