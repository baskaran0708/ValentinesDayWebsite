'use client';

import { motion } from 'framer-motion';
import { useMemo, memo } from 'react';
import Image from 'next/image';

// Memoized gallery item to prevent unnecessary re-renders
const GalleryItem = memo(({ memory, index }) => (
    <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
    >
        {/* Polaroid Card - Using CSS transforms instead of framer-motion for hover */}
        <div className="bg-white p-4 shadow-2xl rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,109,0.5)] hover:scale-105 hover:rotate-2">
            {/* Photo Area with Actual Images */}
            <div className="relative w-full aspect-square rounded overflow-hidden bg-gray-100">
                <Image
                    src={memory.image}
                    alt={memory.caption}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={85}
                />
            </div>

            {/* Caption */}
            <p className="mt-4 text-center text-gray-700 font-medium text-base sm:text-lg font-cursive break-words">
                {memory.caption}
            </p>
        </div>
    </motion.div>
));

GalleryItem.displayName = 'GalleryItem';

export default function Gallery() {
    // Map images from GalleryImages folder
    const memories = useMemo(() => [
        { id: 1, caption: 'Sweet Moments', image: '/GalleryImages/OIP (1).jpg' },
        { id: 2, caption: 'Together Forever', image: '/GalleryImages/OIP.jpg' },
        { id: 3, caption: 'Love Blooms', image: '/GalleryImages/gettyimages-1126891725-612x612.jpg' },
        { id: 4, caption: 'Under the Stars', image: '/GalleryImages/pngtree-serene-valentine-s-day-scene-with-a-starry-sky-heart-constellation-image_16927877.jpg' },
        { id: 5, caption: 'Romantic Sunset', image: '/GalleryImages/valentines-day-serenity-seashore-heart-sunset-romance_1085997-269.avif' },
    ], []);

    return (
        <section className="relative py-24 sm:py-36 px-4 sm:px-6 bg-gradient-to-b from-white to-[#fff0f3] w-full flex flex-col items-center">
            <div className="max-w-7xl w-full mx-auto">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff4d6d] mb-10 sm:mb-16 text-center font-heading break-words"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Beautiful Memories 📸
                </motion.h2>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {memories.map((memory, index) => (
                        <GalleryItem key={memory.id} memory={memory} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
