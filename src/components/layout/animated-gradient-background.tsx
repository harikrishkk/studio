// src/components/layout/animated-gradient-background.tsx
"use client";

import React from 'react';
import { cn } from "@/lib/utils";

// Enhanced type safety for props
interface AnimatedGradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedGradientBackground({ className, ...props }: AnimatedGradientBackgroundProps) {
  // Removed mouse tracking logic as animation is now CSS-based

  return (
    <div
      className={cn(
        "gradient-bg fixed inset-0 -z-10", // Use -z-10 to place behind content
        className // Allow additional classes
      )}
      // Removed inline style as animation is handled by CSS keyframes
      {...props} // Spread remaining props
    >
      {/* Re-enabled grain effect */}
      <div className="grains"></div>
    </div>
  );
}
