import Image from "next/image";
import { Gruppo } from "next/font/google";

import { Container } from "@/components";

const unbounded = Gruppo({ weight: ["400"], subsets: ["latin"] });

export const Hero = () => {
  return (
    <Container className="flex justify-between items-center">
      <div>
        <h1 className={`text-7xl ${unbounded.className}`}>
          It Starts with ITS
        </h1>
        <p className="max-w-[650px] mt-4 text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ducimus, veniam nam fugiat sed magnam id? Exercitationem
          necessitatibus soluta ut.
        </p>

        <div className="flex space-x-3 mt-8">
          <button
            type="button"
            className="bg-green-600 font-medium rounded px-8 py-3"
          >
            Get Started
          </button>

          <button
            type="button"
            className="bg-secondary-100 font-medium rounded px-8 py-3"
          >
            Learn More &rarr;
          </button>
        </div>
      </div>

      <div className="relative rounded-full bg-secondary-400 w-[400px] h-[400px] overflow-hidden">
        <Image
          src="/assets/avatar.png"
          className="object-contain mt-12 ml-4"
          alt="avatar"
          fill
        />
      </div>
    </Container>
  );
};