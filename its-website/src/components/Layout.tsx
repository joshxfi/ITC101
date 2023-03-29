import Image from 'next/image';
import { Navbar } from './Navbar';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`min-h-screen text-white ${inter.className}`}>
      <Navbar />
      <div className='absolute -z-10 top-0 w-full h-full pointer-events-none'>
        <Image
          src='/assets/gridsDotted.png'
          alt='grids'
          fill
          className='opacity-20'
        />
      </div>
      {children}
    </div>
  );
};
