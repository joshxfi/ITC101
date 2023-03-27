import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className={inter.className}>
      <h1>hello world</h1>
    </section>
  );
}
