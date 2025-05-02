import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Import GeistSans
import { GeistMono } from 'geist/font/mono'; // Import GeistMono
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = GeistSans; // Use the imported font object directly

const geistMono = GeistMono; // Use the imported font object directly

export const metadata: Metadata = {
  title: 'MapleLeafDev Portfolio', // Updated title
  description: 'Portfolio of a seasoned front-end developer', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}> {/* Added scroll-smooth and font variables */}
      <body className={`font-mono antialiased`}> {/* Removed direct font application, relies on variables now */}
        <main>{children}</main>
        <Toaster /> {/* Added Toaster for contact form feedback */}
      </body>
    </html>
  );
}
