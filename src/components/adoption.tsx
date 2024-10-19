'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Adoption() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'>
        <SectionHeading>Adoption</SectionHeading>

        <p className='mb-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor
          quis felis vitae placerat. Etiam pharetra eget quam in convallis.
          Pellentesque eros nulla, fermentum non eros sit amet, volutpat mollis
          justo. Morbi rhoncus rhoncus metus nec laoreet. Nam non feugiat quam,
          eget viverra nisi. Vestibulum suscipit, mi quis tempor fringilla, sem
          dui tristique urna, a egestas metus justo in lorem. Sed vitae sagittis
          ante. Curabitur feugiat massa a urna rhoncus, sed faucibus ex
          facilisis. Sed ut tincidunt velit. In id ornare libero. Vestibulum
          metus metus, feugiat in sagittis sit amet, sodales mattis nisi.
          Maecenas tristique ultricies dolor, nec convallis arcu euismod nec.
          Curabitur accumsan, felis a aliquet ornare, mi turpis sollicitudin
          dolor, et rutrum nunc ipsum et urna. Suspendisse vel nisi sed orci
          fringilla convallis sed imperdiet nulla. Donec finibus metus ut auctor
          dictum.
        </p>
      </section>
    </motion.div>
  );
}
