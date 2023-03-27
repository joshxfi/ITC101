import { Navbar } from "./Navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`min-h-screen 2xl:w-full w-[90%] mx-auto max-w-screen-xl text-white ${inter.className}`}>
      <Navbar />
      {children}
    </div>
  );
};
