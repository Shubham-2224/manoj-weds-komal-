import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import LoadingScreen from "@/components/global/LoadingScreen";
import MusicPlayer from "@/components/global/MusicPlayer";
import ScrollProgress from "@/components/global/ScrollProgress";
import Petals from "@/components/global/Petals";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Manoj & Komal | Wedding Invitation",
  description: "Together with their families, joyfully invite you to celebrate their wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${poppins.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="antialiased bg-[#FFF8F3] text-[#3A2E2A] font-poppins min-h-screen">
        <LoadingScreen />
        <ScrollProgress />
        <Petals />
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
