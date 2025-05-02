export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted py-6">
      <div className="container flex flex-col items-center justify-center px-4 text-center text-sm text-muted-foreground md:px-6">
        <p>&copy; {currentYear} MapleLeafDev. All rights reserved.</p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
