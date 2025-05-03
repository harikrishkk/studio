import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';

export function Header() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' }, // Added Testimonials link
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Removed text-primary */}
          <Code className="h-6 w-6" />
          {/* Removed text-primary */}
          <span className="font-bold">MapleLeafDev</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-end space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // Removed hover:text-primary, default hover state will apply
              className="transition-colors hover:text-foreground/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="mb-4 flex items-center space-x-2 border-b pb-4"
                >
                  {/* Removed text-primary */}
                  <Code className="h-6 w-6" />
                  {/* Removed text-primary */}
                  <span className="font-bold">MapleLeafDev</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    // Removed hover:text-primary
                    className="transition-colors hover:text-foreground/80"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
