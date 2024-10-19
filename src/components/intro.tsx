'use client';

import { motion } from 'framer-motion';
import React from 'react';
import RandomFacts from './random-facts';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import '@/utils/i18n/i18n';

export default function Intro() {
  const { t } = useTranslation();

  return (
    <section
      id='intro'
      className='mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem]'
    >
      <motion.h1
        className='text-center mb-[5rem] mt-4 px-4 text-4xl font-bold !leading-[1.5] sm:text-7xl'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'tween',
          duration: 0.3,
        }}
      >
        Community TNR
      </motion.h1>
      <motion.h1
        className='text-right mb-10 mt-4 px-4 text-2xl font-bold !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'tween',
          duration: 0.3,
          delay: 0.1,
        }}
      >
        Gompany Goal
      </motion.h1>
      <motion.h1
        className='text-right mb-10 mt-4 px-4 text-xl font-bold !leading-[1.5] sm:text-2xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'tween',
          duration: 0.3,
          delay: 0.1,
        }}
      >
        Mission Statement
      </motion.h1>

      <RandomFacts />

      <motion.div
        className='flex flex-row items-center justify-center gap-[6rem] px-4 text-lg font-medium mb-[10rem]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <button className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
          {t('loginButton')}
        </button>
        <button className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'>
          <Trans i18nKey='catListButton' />
        </button>
      </motion.div>
    </section>
  );
}
