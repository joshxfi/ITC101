import Image from 'next/image';
import { Hero, Partners, Footer, Container } from '@/components';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <section className='md:mt-28 mt-20'>
      <Hero />

      <div className='relative mt-16 w-screen md:h-[250px] h-[80px]'>
        <Image
          src='/assets/wave.svg'
          alt='wave'
          fill
          className='object-top object-cover'
        />
      </div>

      <div className='relative bg-secondary-400 overflow-x-hidden'>
        <Container>
          <Partners />
          <Testimonials />
          <Footer />
        </Container>
      </div>
    </section>
  );
}
