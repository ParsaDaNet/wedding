import type { Metadata } from "next";
import { Alex_Brush, Cormorant_Garamond } from "next/font/google";
import TranslateWidget from "./components/TranslatorWidget";
import Navbar from "./components/NavBar";
import "./globals.css";

const calligraphy = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calligraphy",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Yasaman & Medhy",
  description: "Kindly respond to our wedding invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${calligraphy.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-gray-50">
        <Navbar />
        {children}
        <TranslateWidget />
      </body>
    </html>
  );
}