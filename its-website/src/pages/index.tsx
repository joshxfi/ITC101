import { Hero, Partners, Footer } from "@/components";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <section className="mt-32">
      <Hero />

      <div className="relative bg-secondary-400 mt-40 pt-12">
        <Partners />
        <Testimonials />
        <Footer />
      </div>
    </section>
  );
}
