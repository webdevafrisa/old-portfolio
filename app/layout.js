import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="container ">{children}</div>
        <Navbar />
      </body>
    </html>
  );
}
