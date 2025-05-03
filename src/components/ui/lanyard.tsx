
// src/components/ui/lanyard.tsx
import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// --- LanyardCard ---
interface LanyardCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const LanyardCard = React.forwardRef<HTMLDivElement, LanyardCardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative mx-auto max-w-3xl overflow-hidden rounded-xl border border-border/30 bg-card/60 shadow-lg backdrop-blur-sm',
        // Add a subtle grid pattern overlay
        'before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_center,_var(--color-dots)_1px,_transparent_1px)] before:[background-size:16px_16px] before:opacity-10',
        className
      )}
      style={{ '--color-dots': 'hsl(var(--muted-foreground))' } as React.CSSProperties}
      {...props}
    >
      {/* Optional: Add a subtle top glow */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-primary/20 to-transparent"></div> */}
      {children}
    </div>
  )
);
LanyardCard.displayName = 'LanyardCard';

// --- LanyardIdCard ---
interface LanyardIdCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt: string;
  imageAiHint?: string;
  name: string;
  title: string;
  company?: string;
}

const LanyardIdCard = React.forwardRef<HTMLDivElement, LanyardIdCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      imageAiHint,
      name,
      title,
      company,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        'relative flex flex-col items-center gap-4 bg-card/40 p-6 backdrop-blur-sm sm:flex-row sm:gap-6 md:p-8',
        // Add a border below this section
        'border-b border-border/30',
        className
      )}
      {...props}
    >
      {/* Slot Punch Hole - purely visual */}
      <div className="absolute top-4 left-1/2 h-2 w-12 -translate-x-1/2 rounded-full bg-background opacity-50 ring-1 ring-border/50"></div>

      <Image
        src={imageUrl}
        alt={imageAlt}
        width={100}
        height={100}
        className="h-24 w-24 flex-shrink-0 rounded-full border-4 border-border/40 object-cover shadow-md md:h-28 md:w-28"
        data-ai-hint={imageAiHint}
      />
      <div className="flex-grow text-center sm:text-left">
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">
          {name}
        </h1>
        <p className="text-lg text-primary">{title}</p>
        {company && (
          <p className="text-md text-muted-foreground">{company}</p>
        )}
      </div>
    </div>
  )
);
LanyardIdCard.displayName = 'LanyardIdCard';

export { LanyardCard, LanyardIdCard };
