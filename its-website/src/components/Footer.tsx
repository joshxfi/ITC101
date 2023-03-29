import { footerItems } from '@/utils/constants';
import { Container } from './Container';

export const Footer = () => {
  return (
    <Container className='pb-12 flex flex-col items-center'>
      <div className='mt-40 grid w-full grid-cols-2 flex-wrap justify-between gap-y-16 sm:flex'>
        {footerItems.map((item) => (
          <ul key={item.name} className='flex flex-col gap-4'>
            <li className='font-medium'>{item.name}</li>
            {item.children.map((c) => (
              <li key={c.name}>
                <a
                  href={c.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 transition-colors hover:text-gray-500'
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        ))}
        <div className='text-gray-400 text-right self-end space-y-2'>
          <h1 className='text-green-600 font-black text-5xl'>ITS</h1>
          <p>Information Technology Society</p>
        </div>
      </div>

      <div className='bg-secondary-100 h-[2px] my-24 w-full' />

      <a
        href='https://github.com/joshxfi'
        target='_blank'
        rel='noopener noreferrer'
        className='text-gray-400'
      >
        Made by Josh Daniel Bañares © 2023
      </a>
    </Container>
  );
};
