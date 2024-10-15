'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDownLong } from 'react-icons/fa6';

export default function SectionDivider() {
  return (
    <motion.div
      className='flex flex-row items-center justify-center mb-[8rem]'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <FaArrowDownLong className='opacity-70' size={70} />
    </motion.div>
  );
}
