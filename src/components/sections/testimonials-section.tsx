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
        className="relative w-full"
      >
        <div
          className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="flex h-full flex-col justify-between bg-card/70 backdrop-blur-sm border border-border/40 shadow-md transition-transform hover:scale-[1.01]">
                  <CardContent className="flex flex-col items-start gap-4 p-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-2 border-border/50">
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.aiHint}
                         />
                        <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                      </div>
                    </div>
                    <p className="text-base text-foreground/90">"{testimonial.text}"</p>
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
