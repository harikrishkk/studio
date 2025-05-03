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

interface Testimonial {
  name: string;
  handle: string;
  avatarUrl: string;
  aiHint: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Maurício Pradella',
    handle: '@mpradella',
    avatarUrl: 'https://picsum.photos/48/48?random=10',
    aiHint: 'developer portrait',
    text: 'Working with MapleLeafDev was a fantastic experience. Professional, skilled, and delivered beyond expectations!',
  },
  {
    name: 'Fernando',
    handle: '@Fernando_Her85',
    avatarUrl: 'https://picsum.photos/48/48?random=11',
    aiHint: 'man portrait',
    text: 'Para los que trabajan en React, ¡tírenle un ojo a este recurso! Muy impresionado con la calidad del código.',
  },
  {
    name: 'Tracy',
    handle: '@Traccey001',
    avatarUrl: 'https://picsum.photos/48/48?random=12',
    aiHint: 'woman smiling',
    text: 'This front-end work is absolutely amazing!!! So clean and performant.',
  },
  {
    name: 'Gibson',
    handle: '@GibsonSMurray',
    avatarUrl: 'https://picsum.photos/48/48?random=13',
    aiHint: 'person thinking',
    text: 'mapleleafdev.ca has got to be the most artistic UI component lib I\'ve seen in a while 🤔',
  },
  {
    name: 'Virag',
    handle: '@Virag_Dev',
    avatarUrl: 'https://picsum.photos/48/48?random=14',
    aiHint: 'woman coding',
    text: 'This is so cool! The way the components come together is just *chef\'s kiss*.',
  },
  {
    name: 'Alex Chen',
    handle: '@alex_frontend',
    avatarUrl: 'https://picsum.photos/48/48?random=15',
    aiHint: 'developer headshot',
    text: 'Highly recommend MapleLeafDev for any complex UI challenges. True problem solver.',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
        Here's what others are saying
      </h2>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        They think my work is cool, maybe you will too!
      </p>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="relative w-full"
      >
        {/* Apply fade effect using mask */}
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
