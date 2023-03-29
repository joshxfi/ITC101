import Image from 'next/image';

interface Props {
  className?: string;
  imgSrc: string;
  name: string;
  position: string;
}

export const Card = ({ className, imgSrc, name, position }: Props) => {
  return (
    <div
      className={`bg-secondary-300 rounded-xl shadow-lg max-w-[550px] p-8 relative z-10 ${className}`}
    >
      <div className='flex items-center gap-x-8'>
        <div className='relative md:h-[96px] md:w-[96px] h-[72px] w-[72px]'>
          <Image
            src={imgSrc}
            alt='profile'
            fill
            className='bg-secondary-100 rounded-full'
          />
        </div>
        <div>
          <h4 className='md:text-lg'>{name}</h4>
          <p className='text-green-500 text-sm md:text-base'>{position}</p>
        </div>
      </div>

      <p className='mt-4 md:mt-4 text-sm md:text-base'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        ullam rerum magnam temporibus molestias nostrum natus blanditiis
        delectus, dicta velit laboriosam ipsum itaque
      </p>
    </div>
  );
};
