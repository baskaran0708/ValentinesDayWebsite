'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2026-02-14T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const TimeCard = ({ value, label }) => (
        <motion.div
            className="glass-card p-6 rounded-2xl flex flex-col items-center min-w-[100px]"
            whileHover={{ scale: 1.05 }}
        >
            <motion.div
                key={value}
                className="text-4xl md:text-5xl font-bold text-[#ff4d6d] mb-2"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: 360 }}
                transition={{ duration: 0.6 }}
            >
                {String(value).padStart(2, '0')}
            </motion.div>
            <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
                {label}
            </div>
        </motion.div>
    );

    return (
        <section className="relative py-24 sm:py-36 px-4 sm:px-6 bg-gradient-to-b from-[#fff0f3] to-white w-full flex flex-col items-center">
            <div className="max-w-5xl w-full mx-auto text-center">
                <br/>
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff4d6d] mb-4 font-heading break-words"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Next Valentine's Day In... ⏰
                </motion.h2>

                <motion.p
                    className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 font-body break-words"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    Counting down to celebrate our love again 💕
                </motion.p>

                {/* Countdown Display */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <TimeCard value={timeLeft.days} label="Days" />
                    <TimeCard value={timeLeft.hours} label="Hours" />
                    <TimeCard value={timeLeft.minutes} label="Minutes" />
                    <TimeCard value={timeLeft.seconds} label="Seconds" />
                </motion.div>
            </div>
        </section>
    );
}
