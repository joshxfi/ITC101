import Image from 'next/image';
import { Gruppo } from 'next/font/google';

import { Button, Container } from '@/components';
import { motion } from 'framer-motion';

const gruppo = Gruppo({ weight: ['400'], subsets: ['latin'] });

export const Hero = () => {
  return (
    <Container className='flex justify-between items-center flex-col xl:flex-row'>
      <div className='text-center xl:text-left'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`md:text-7xl text-4xl ${gruppo.className}`}
        >
          It Starts with ITS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className='md:max-w-[650px] max-w-[400px] mt-4 md:text-lg text-sm font-light'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ducimus, veniam nam fugiat sed magnam id? Exercitationem
          necessitatibus soluta ut.
        </motion.p>

        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
            type: 'spring',
            stiffness: 100,
          }}
          className='flex space-x-3 mt-8 justify-center xl:justify-start text-sm md:text-base'
        >
          <Button text='Get Started' />

          <button
            type='button'
            className='bg-secondary-100 font-medium shadow-md rounded px-8 py-3'
          >
            Learn More &rarr;
          </button>
        </motion.div>
      </div>

      <div className='bg-secondary-400 w-[400px] h-[400px] hidden xl:block overflow-hidden rounded-full'>
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          whileTap={{ scale: 0.9 }}
          className='relative w-[400px] h-[400px] cursor-pointer'
        >
          <Image
            src='/assets/avatar.png'
            className='object-contain mt-12 ml-4'
            alt='avatar'
            sizes='(max-width: 768px) 100vw, 400px'
            fill
          />
        </motion.div>
      </div>
    </Container>
  );
};
