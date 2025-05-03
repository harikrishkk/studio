'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { TestimonialsData } from '@/lib/portfolio-data'; // Import the type

interface TestimonialsSectionProps {
  data: TestimonialsData;
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const { title, subtitle, items: testimonials } = data;

  return (
    <section id="testimonials" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        {subtitle}
      </p>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        // Increase max-width slightly for the carousel area if needed, or manage via parent container
        className="relative w-full max-w-4xl mx-auto" // Added max-w-4xl and mx-auto
      >
        {/* Increased width of gradient overlays */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" // Increased w-16 to w-24
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" // Increased w-16 to w-24
          aria-hidden="true"
        />

        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              {/* Apply hover effect and angular alignment */}
              <div className={`p-1 h-full transition-transform duration-300 ease-out hover:scale-105 ${
                  index % 2 === 0 ? 'hover:-rotate-3' : 'hover:rotate-3' // Alternate rotation on hover
                }`}>
                <Card
                  className={`flex h-full flex-col justify-between bg-card/70 backdrop-blur-sm border border-border/40 shadow-md ${
                    index % 2 === 0 ? '-rotate-2' : 'rotate-2' // Apply initial slight rotation
                  }`}
                  style={{ maxWidth: '300px' }} // Make cards smaller
                  >
                  <CardContent className="flex flex-col items-start gap-3 p-4"> {/* Reduced padding */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-border/50"> {/* Smaller avatar */}
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.aiHint}
                         />
                        <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p> {/* Smaller name */}
                        <p className="text-xs text-muted-foreground">{testimonial.handle}</p> {/* Smaller handle */}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/90">"{testimonial.text}"</p> {/* Smaller text */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex" />
      </Carousel>
    </section>
  );
}
