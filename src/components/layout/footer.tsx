import type { FooterData } from '@/lib/portfolio-data'; // Import the type

interface FooterProps {
  data: FooterData;
}

export function Footer({ data }: FooterProps) {
  const { copyright, builtWith } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted py-6">
      <div className="container flex flex-col items-center justify-center px-4 text-center text-sm text-muted-foreground md:px-6">
        <p>&copy; {currentYear} {copyright}</p>
        <p>{builtWith}</p>
      </div>
    </footer>
  );
}
