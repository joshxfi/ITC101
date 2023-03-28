import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <section className="mt-32">
      <Hero />

      <div>
        <div className="w-screen left-0 absolute h-[200px]">
          <Image
            src="/assets/wave.svg"
            alt="wave"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="bg-secondary-400 absolute h-screen w-screen"></div>
      </div>
    </section>
  );
}
