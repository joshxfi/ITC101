import { Container } from './Container';

export const Navbar = () => {
  return (
    <Container className='flex justify-between items-center mt-12'>
      <h1 className='text-green-600 font-black text-5xl'>ITS</h1>

      <div className='flex space-x-24 items-center'>
        <ul className='md:flex space-x-12 hidden'>
          <li>
            <a
              href='#partners'
              className='hover:text-green-500 transition-colors'
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href='#testimonials'
              className='hover:text-green-500 transition-colors'
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href='https://github.com/joshxfi/ITC101/tree/main/its-website'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-green-500 transition-colors'
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          type='button'
          className='bg-green-600 font-medium rounded px-8 py-3 text-sm md:text-base'
        >
          Register
        </button>
      </div>
    </Container>
  );
};
