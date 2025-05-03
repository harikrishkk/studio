import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
// Removed import { AnimatedGradientBackground } from '@/components/layout/animated-gradient-background';
import { AnimatedCodeBackground } from '@/components/layout/animated-code-background'; // Import the code animation background

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: 'MapleLeafDev Portfolio',
  description: 'Portfolio of a seasoned front-end developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply dark theme globally and ensure scroll-smooth behavior
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      {/* Ensure body uses monospace font via variable and has relative positioning for z-index stacking */}
      <body className={`font-mono antialiased relative`}>
        {/* The animated background component */}
        {/* <AnimatedGradientBackground /> */}
        <AnimatedCodeBackground /> {/* Use the new code animation background */}
        {/* Content container with higher z-index to appear above the background */}
        <div className="relative z-10">
          <main>{children}</main>
        </div>
        {/* Toaster for notifications */}
        <Toaster />
      </body>
    </html>
  );
}
