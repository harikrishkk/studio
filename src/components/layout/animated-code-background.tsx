// src/components/layout/animated-code-background.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from "@/lib/utils";

interface SymbolData {
  id: number;
  char: string;
  x: number;
  y: number;
  opacity: number;
  fontSize: number;
  vy: number; // Vertical velocity
}

// Common code-related symbols
const codeSymbols = ['<>', '{}', '()', '[]', '=>', '!=', '===', '&&', '||', ';', ':', '#', '$', '%', '*', '+', '-', '/', '<', '>'];

// Number of symbols to render
const SYMBOL_COUNT = 50; // Keep count relatively low for performance

export function AnimatedCodeBackground({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [symbols, setSymbols] = useState<SymbolData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  const initializeSymbols = useCallback(() => {
    if (!containerRef.current) return;
    const { offsetWidth: width, offsetHeight: height } = containerRef.current;
    const newSymbols: SymbolData[] = [];
    for (let i = 0; i < SYMBOL_COUNT; i++) {
      newSymbols.push({
        id: i,
        char: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random() * 0.5 + 0.1, // Increased opacity range (0.1 to 0.6)
        fontSize: Math.random() * 14 + 10, // Font size between 10px and 24px
        vy: Math.random() * 0.5 + 0.1, // Slow vertical drift speed
      });
    }
    setSymbols(newSymbols);
  }, []);


  const animateSymbols = useCallback(() => {
      if (!containerRef.current) return;
      const { offsetHeight: height } = containerRef.current;

      setSymbols(prevSymbols =>
        prevSymbols.map(symbol => {
          let newY = symbol.y + symbol.vy;
          // Reset symbol to top if it goes off screen
          if (newY > height + symbol.fontSize) {
            newY = -symbol.fontSize; // Start just above the screen
          }
          // Slightly adjust opacity over time for a subtle pulsing effect
          let newOpacity = symbol.opacity + (Math.random() - 0.5) * 0.02;
          // Clamp opacity within the desired range (e.g., 0.1 to 0.7)
          newOpacity = Math.max(0.1, Math.min(0.7, newOpacity));

          return {
            ...symbol,
            y: newY,
            opacity: newOpacity,
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animateSymbols);
    }, []);


  useEffect(() => {
    // Initialize symbols only on the client after mount
    initializeSymbols();

    // Set up resize listener
    const handleResize = () => {
        // Re-initialize symbols on resize to fit new dimensions
        initializeSymbols();
    };
    window.addEventListener('resize', handleResize);


    // Start animation loop
     animationFrameRef.current = requestAnimationFrame(animateSymbols);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
       if (animationFrameRef.current) {
         cancelAnimationFrame(animationFrameRef.current);
       }
    };
  }, [initializeSymbols, animateSymbols]); // Add dependencies

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden pointer-events-none", // Ensure it's behind everything and non-interactive
        className
      )}
      {...props}
    >
      {symbols.map(symbol => (
        <span
          key={symbol.id}
          // Use a more visible muted color, adjust transparency via opacity style
          className="absolute text-muted-foreground"
          style={{
            left: `${symbol.x}px`,
            top: `${symbol.y}px`,
            fontSize: `${symbol.fontSize}px`,
            opacity: symbol.opacity, // Opacity is controlled by state now
            // Use transform for potential future animations (better performance)
             transform: `translateY(0)`, // Placeholder for potential transform-based animation
             willChange: 'transform, opacity', // Hint browser about animations
             textShadow: '0 0 5px hsl(var(--foreground) / 0.5)', // Add subtle glow
          }}
        >
          {symbol.char}
        </span>
      ))}
    </div>
  );
}
