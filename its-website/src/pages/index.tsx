import Image from "next/image";
import { Hero, Partners } from "@/components";

export default function Home() {
  return (
    <section className="mt-32">
      <Hero />

      <div className="relative bg-secondary-400 h-screen mt-40">
        <div className="w-screen absolute -top-28 h-[200px]">
          <Image
            src="/assets/wave.svg"
            alt="wave"
            fill
            className="object-cover object-top"
          />
        </div>

        <Partners />
      </div>
    </section>
  );
}
