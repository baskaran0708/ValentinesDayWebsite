'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeartRain from '@/components/HeartRain';
import Footer from '@/components/Footer';

export default function TimelinePage() {
    const milestones = [
        {
            date: 'January 2024',
            title: 'First Meeting',
            description: 'Our eyes met and time stood still. It was the beginning of something beautiful.',
            icon: '✨',
            color: 'from-rose-600 to-pink-600',
        },
        {
            date: 'March 2024',
            title: 'First Date',
            description: 'Coffee turned into hours of conversation. We laughed, we talked, we connected.',
            icon: '☕',
            color: 'from-purple-600 to-fuchsia-600',
        },
        {
            date: 'May 2024',
            title: 'First Adventure',
            description: 'We explored the city together, creating memories that would last forever.',
            icon: '🗺️',
            color: 'from-blue-600 to-indigo-600',
        },
        {
            date: 'August 2024',
            title: 'Becoming Official',
            description: 'The day we decided to make it official. Best decision ever!',
            icon: '💑',
            color: 'from-red-600 to-rose-600',
        },
        {
            date: 'December 2024',
            title: 'First Holiday Together',
            description: 'Celebrating our first holiday season as a couple, full of joy and love.',
            icon: '🎄',
            color: 'from-emerald-600 to-teal-600',
        },
        {
            date: 'February 2026',
            title: 'Forever and Always',
            description: 'Every day with you is a new chapter in our love story.',
            icon: '💕',
            color: 'from-pink-600 to-red-600',
        },
    ];

    return (
        <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#fff0f3] to-white flex flex-col w-full">
            <HeartRain />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 w-full flex flex-col items-center">
                <div className="max-w-4xl w-full mx-auto text-center">
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff4d6d] mb-4 sm:mb-6 font-heading break-words"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Love Story 📖
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-700 font-cursive break-words"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Every moment together writes a new page in our beautiful journey
                    </motion.p>
                </div>
            </section>

            {/* Timeline */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 flex-grow w-full flex flex-col items-center">
                <div className="max-w-5xl w-full mx-auto">
                    <div className="relative">
                        {/* Timeline Line - centered on md+, left on mobile */}
                        <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-[#ff4d6d] to-[#ffc2d1] md:-translate-x-1/2" />

                        {/* Milestones */}
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className={`relative mb-12 sm:mb-16 pl-14 sm:pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+2.5rem)] md:text-right' : 'md:pl-[calc(50%+2.5rem)] md:text-left'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="relative flex items-stretch min-h-[4rem]">
                                    {/* Content - clear of timeline line */}
                                    <div className={`flex-1 min-w-0 ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                                        <motion.div
                                            className={`glass-card p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${milestone.color} shadow-xl break-words`}
                                            whileHover={{ scale: 1.02, translateY: -5 }}
                                        >
                                            <div className="text-rose-900 font-bold mb-2 text-xs sm:text-sm drop-shadow-sm">{milestone.date}</div>
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-900 mb-2 sm:mb-3 drop-shadow-sm font-heading">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-rose-800 text-sm sm:text-base leading-relaxed">{milestone.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Icon Circle - on timeline */}
                                    <motion.div
                                        className="absolute left-0 md:left-1/2 top-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#ff4d6d] md:-translate-x-1/2 z-10"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-2xl sm:text-3xl">{milestone.icon}</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
