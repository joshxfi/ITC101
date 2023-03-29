import { Container } from './Container';

export const Navbar = () => {
  return (
    <Container className='flex justify-between items-center mt-12'>
      <h1 className='text-green-600 font-black text-5xl'>ITS</h1>

      <div className='flex space-x-24 items-center'>
        <ul className='flex space-x-12'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button
          type='button'
          className='bg-green-600 font-medium rounded px-8 py-3'
        >
          Register
        </button>
      </div>
    </Container>
  );
};
