import { Navbar } from "./Navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`min-h-screen text-white ${inter.className}`}>
      <Navbar />
      {children}
    </div>
  );
};
