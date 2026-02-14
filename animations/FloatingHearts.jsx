'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingHearts({ count = 15 }) {
  const [hearts, setHearts] = useState([]);
  const [travelHeight, setTravelHeight] = useState(1200);

  useEffect(() => {
    setTravelHeight(typeof window !== 'undefined' ? window.innerHeight + 200 : 1200);
  }, []);

  useEffect(() => {
    const heartArray = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 20 + Math.random() * 20,
    }));
    setHearts(heartArray);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
          }}
          animate={{
            y: [0, -travelHeight],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="rgba(255, 77, 109, 0.6)"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
