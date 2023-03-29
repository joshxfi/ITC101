import Image from 'next/image';

export const Logo = () => {
  return (
    <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] relative'>
      <Image
        src='/assets/logo.png'
        alt='logo'
        quality={100}
        priority
        fill
        className='object-contain'
      />
    </div>
  );
};
