'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeartRain from '@/components/HeartRain';
import Footer from '@/components/Footer';
import Confetti from '@/animations/Confetti';
import { useState } from 'react';

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const questions = [
        {
            question: 'What makes our love special?',
            answers: [
                'The way we laugh together',
                'The adventures we share',
                'The comfort we find in each other',
                'All of the above ❤️',
            ],
            correct: 3,
        },
        {
            question: 'What is our favorite activity together?',
            answers: [
                'Watching movies cuddled up',
                'Going on romantic walks',
                'Cooking together',
                'All moments with you are my favorite!',
            ],
            correct: 3,
        },
        {
            question: 'What do I love most about you?',
            answers: [
                'Your beautiful smile',
                'Your kind heart',
                'Your amazing personality',
                'Everything about you! 💕',
            ],
            correct: 3,
        },
        {
            question: 'How much do I love you?',
            answers: [
                'To the moon and back',
                'More than words can say',
                'With all my heart',
                'Infinitely and beyond! 🌟',
            ],
            correct: 3,
        },
    ];

    const handleAnswer = (index) => {
        setSelectedAnswer(index);
        if (index === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
                setShowConfetti(true);
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
    };

    return (
        <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#fff0f3] to-white flex flex-col">
            <HeartRain />
            <Navigation />
            <Confetti trigger={showConfetti} />

            {/* Hero Section */}
            <section className="relative pt-28 sm:pt-32 pb-8 sm:pb-10 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff4d6d] mb-4 sm:mb-6 font-heading break-words"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Love Quiz ❤️
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-700 font-cursive break-words"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Let's test how well we know each other!
                    </motion.p>
                </div>
            </section>

            {/* Quiz Section */}
            <section className="relative py-12 sm:py-20 px-4 sm:px-6 flex-grow flex items-center justify-center">
                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!showResult ? (
                            <motion.div
                                key={currentQuestion}
                                className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                            >
                                {/* Progress Bar */}
                                <div className="mb-8">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>Question {currentQuestion + 1} of {questions.length}</span>
                                        <span>Score: {score}/{questions.length}</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-[#ff4d6d] to-[#ff8fa3]"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>

                                {/* Question */}
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff4d6d] mb-6 sm:mb-8 text-center font-heading break-words">
                                    {questions[currentQuestion].question}
                                </h2>

                                {/* Answers */}
                                <div className="space-y-6">
                                    {questions[currentQuestion].answers.map((answer, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => handleAnswer(index)}
                                            disabled={selectedAnswer !== null}
                                            className={`w-full p-3 sm:p-4 rounded-xl font-medium text-left transition-all text-sm sm:text-base break-words ${selectedAnswer === null
                                                ? 'bg-white hover:bg-[#ffc2d1] hover:scale-105'
                                                : selectedAnswer === index
                                                    ? index === questions[currentQuestion].correct
                                                        ? 'bg-green-400 text-white'
                                                        : 'bg-red-400 text-white'
                                                    : index === questions[currentQuestion].correct
                                                        ? 'bg-green-400 text-white'
                                                        : 'bg-gray-200'
                                                }`}
                                            whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                                            whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                                        >
                                            {answer}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="glass-card p-12 rounded-3xl shadow-2xl text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 0.5, repeat: 3 }}
                                >
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff4d6d] mb-4 sm:mb-6 font-heading break-words">
                                        Perfect Score! 💖
                                    </h2>
                                </motion.div>

                                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-6 sm:mb-8 font-cursive break-words">
                                    You got {score} out of {questions.length} correct!
                                </p>

                                <div className="mb-8">
                                    <div className="text-6xl mb-4">
                                        {score === questions.length ? '🏆' : score >= questions.length / 2 ? '💕' : '❤️'}
                                    </div>
                                    <p className="text-base sm:text-lg md:text-xl text-gray-700 font-body break-words">
                                        {score === questions.length
                                            ? 'You know me perfectly! We are truly soulmates! 💑'
                                            : score >= questions.length / 2
                                                ? 'Amazing! Our love is undeniable! 💕'
                                                : 'Every day together is a chance to learn more about each other! ❤️'}
                                    </p>
                                </div>

                                <motion.button
                                    onClick={resetQuiz}
                                    className="px-10 py-4 bg-gradient-to-r from-[#ff4d6d] to-[#ff8fa3] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Try Again 🔄
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
