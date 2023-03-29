import Image from 'next/image';
import { Card } from './Card';
import { nanoid } from 'nanoid';

const data = [
  {
    name: 'Bradley Cooper',
    position: 'Product Designer',
  },
  {
    name: 'Harry Watson',
    position: 'Software Engineer',
  },
  {
    name: 'Dwayne Parker',
    position: 'UI/UX Designer',
  },
];

export const Testimonials = () => {
  return (
    <section className='relative md:mt-44 mt-32 flex flex-col gap-y-12'>
      <Image
        src='/assets/web.png'
        alt='web'
        width={600}
        height={500}
        className='absolute top-0 -right-32 w-auto h-auto'
      />

      <Image
        src='/assets/web.png'
        alt='web'
        width={600}
        height={500}
        className='absolute bottom-0 -left-32 rotate-90 w-auto h-auto'
      />

      {data.map((d, i) => (
        <Card
          key={nanoid()}
          imgSrc={`/assets/man${i + 1}.png`}
          name={d.name}
          position={d.position}
          className={i === 1 ? 'self-end' : ''}
        />
      ))}
    </section>
  );
};
