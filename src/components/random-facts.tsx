'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

const facts = [
  'cat fact #1',
  'cat fact #2',
  'cat fact #3',
  'cat fact #4',
  'cat fact #5',
  'cat fact #6',
];

export default function RandomFacts() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % facts.length),
      10000
    );
    return () => clearInterval(timerId);
  }, []);

  // center the text in x and y. get thicker border, ensure the text wraps
  return (
    <motion.div
      key={index}
      className='flex items-center justify-center border-2 overflow-hidden rounded-xl border-black/5 border-gray-900 py-2 px-4 w-[40rem] h-[4rem] bg-white dark:bg-white/10 dark:text-white mb-8 transition-colors'
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: 'spring',
        duration: 1.5,
      }}
    >
      {facts[index]}
    </motion.div>
  );
}
