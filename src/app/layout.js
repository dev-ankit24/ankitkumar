import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Full Stack Developer Portfolio",
  description: "Portfolio of a Full Stack Developer specializing in React, Next.js, and Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
