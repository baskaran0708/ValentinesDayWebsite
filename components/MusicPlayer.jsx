'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    // Attempt autoplay on mount
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const attemptPlay = () => {
                audio.play().then(() => {
                    setIsPlaying(true);
                }).catch(() => {
                    // Autoplay blocked - user needs to click play
                    setIsPlaying(false);
                });
            };
            // Try after a small delay
            setTimeout(attemptPlay, 1000);
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (newVolume > 0) setIsMuted(false);
    };

    return (
        <>
            <motion.div
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 glass-card p-3 sm:p-4 rounded-2xl shadow-2xl max-w-[calc(100vw-2rem)]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <div className="flex items-center gap-4">
                    {/* Play/Pause Button */}
                    <motion.button
                        onClick={togglePlay}
                        className="w-12 h-12 bg-gradient-to-br from-[#ff4d6d] to-[#ff8fa3] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isPlaying ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </motion.button>

                    {/* Music Info */}
                    <div className="hidden md:block">
                        <p className="text-sm font-semibold text-gray-800">Romantic Melody</p>
                        <p className="text-xs text-gray-600">Background Music 🎵</p>
                    </div>

                    {/* Volume Control */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={toggleMute}
                            className="text-gray-700 hover:text-[#ff4d6d] transition-colors"
                        >
                            {isMuted || volume === 0 ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                </svg>
                            )}
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-20 accent-[#ff4d6d]"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} loop>
                <source src="/music/Dheema BGM.mp3" type="audio/mpeg" />
            </audio>

        </>
    );
}
