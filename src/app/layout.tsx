
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AnimatedCodeBackground } from '@/components/layout/animated-code-background'; // Import the background
import { getPortfolioData } from '@/lib/portfolio-data'; // Import the data loading function

const geistSans = GeistSans;
const geistMono = GeistMono;

// Load metadata dynamically
const portfolioData = getPortfolioData();
export const metadata: Metadata = {
  title: portfolioData.metadata.title,
  description: portfolioData.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply dark theme globally and font variables
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      {/* Ensure body uses monospace font via variable and has relative positioning for z-index stacking */}
      <body className={`font-mono antialiased relative flex min-h-screen flex-col`}> {/* Added flex classes */}
        {/* The animated background component */}
        <AnimatedCodeBackground />
        {/* Content container with higher z-index to appear above the background */}
        {/* Removed unnecessary div wrapper */}
        <main className="relative z-10 flex-grow">{children}</main> {/* Added flex-grow */}
        {/* Toaster for notifications */}
        <Toaster />
      </body>
    </html>
  );
}
