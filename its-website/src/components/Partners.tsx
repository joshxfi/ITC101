import { RxNotionLogo } from 'react-icons/rx';
import { BsPlaystation, BsApple } from 'react-icons/bs';
import { Gruppo } from 'next/font/google';

const gruppo = Gruppo({ weight: ['400'], subsets: ['latin'] });

export const Partners = () => {
  return (
    <div id='partners' className='flex flex-col items-center scroll-mt-24'>
      <h2
        className={`md:text-5xl text-2xl text-bold pb-2 inline-block border-b-2 border-b-green-600 ${gruppo.className}`}
      >
        Our Trusted Partners
      </h2>

      <div className='mt-14 flex lg:space-x-24 space-x-20 md:text-6xl text-4xl'>
        <RxNotionLogo className='hover:text-green-400 transition-colors cursor-pointer' />
        <BsApple className='hover:text-green-400 transition-colors cursor-pointer' />
        <BsPlaystation className='hover:text-green-400 transition-colors cursor-pointer' />
      </div>
    </div>
  );
};
