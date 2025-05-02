import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AnimatedBackground } from '@/components/layout/animated-background'; // Import the new component

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className={`font-mono antialiased relative`}> {/* Add relative positioning */}
        <AnimatedBackground /> {/* Add the animated background */}
        <div className="relative z-10"> {/* Ensure content is above the background */}
          <main>{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
