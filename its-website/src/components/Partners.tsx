import { RxNotionLogo } from 'react-icons/rx';
import { BsPlaystation, BsApple } from 'react-icons/bs';
import { Gruppo } from 'next/font/google';

const gruppo = Gruppo({ weight: ['400'], subsets: ['latin'] });

export const Partners = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2
        className={`text-5xl text-bold pb-2 inline-block border-b-2 border-b-green-600 ${gruppo.className}`}
      >
        Our Trusted Partners
      </h2>

      <div className='mt-14 flex space-x-24'>
        <RxNotionLogo className='text-6xl hover:text-green-400 transition-colors cursor-pointer' />
        <BsApple className='text-6xl hover:text-green-400 transition-colors cursor-pointer' />
        <BsPlaystation className='text-6xl hover:text-green-400 transition-colors cursor-pointer' />
      </div>
    </div>
  );
};
