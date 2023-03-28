import Image from "next/image";
import { Hero, Partners, Footer } from "@/components";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <section className="mt-32">
      <Hero />

      <div className="relative bg-secondary-400 mt-40 pt-12">
        <div className="w-screen absolute -z-10 -top-28 h-[200px]">
          <Image
            src="/assets/wave.svg"
            alt="wave"
            fill
            className="object-cover object-top"
          />
        </div>

        <Partners />
        <Testimonials />
        <Footer />
      </div>
    </section>
  );
}
