import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import VoidBackground from "@/components/VoidBackground";
import Preloader from "@/components/Preloader";

const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VOID Hackathon",
  description: "Embrace the unknown. Trust the process.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Preloader />
        <VoidBackground>{children}</VoidBackground>
      </body>
    </html>
  );
}
