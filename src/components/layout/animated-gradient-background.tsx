// src/components/layout/animated-gradient-background.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

// Enhanced type safety for props
interface AnimatedGradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedGradientBackground({ className, ...props }: AnimatedGradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY, currentTarget } = event;
      // Ensure currentTarget is an HTMLElement to access offsetWidth/Height
      if (currentTarget instanceof HTMLElement) {
        const { offsetWidth, offsetHeight } = currentTarget;
        const xPercent = Math.round((clientX / offsetWidth) * 100);
        const yPercent = Math.round((clientY / offsetHeight) * 100);
        setMousePosition({ x: xPercent, y: yPercent });
      }
    };

    // We attach the listener to the body to track mouse position across the viewport
    // Note: Attaching directly to the background div might not work as expected if it's behind other content (z-index: -1)
    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Dynamic style based on mouse position
  const backgroundStyle: React.CSSProperties = {
    // Use CSS variables defined in globals.css
    '--mouse-x': `${mousePosition.x}%`,
    '--mouse-y': `${mousePosition.y}%`,
    // Ensure direct style application if CSS variables aren't sufficient or for compatibility
    // This radial gradient uses the CSS variables for positioning
    backgroundImage: `
      radial-gradient(
        circle farthest-corner at var(--mouse-x) var(--mouse-y),
        hsl(var(--gradient-color-1)) 0%,
        hsl(var(--gradient-color-2)) 25%,
        hsl(var(--gradient-color-3)) 50%,
        hsl(var(--gradient-color-4)) 100%
      )
    `,
  };


  return (
    <div
      className={cn(
        "gradient-bg fixed inset-0 -z-10", // Use -z-10 to place behind content
        className // Allow additional classes
      )}
      style={backgroundStyle}
      {...props} // Spread remaining props
    >
      {/* Optional: Add grain effect or other layers here */}
      {/* <div className="grains"></div> */}
    </div>
  );
}
