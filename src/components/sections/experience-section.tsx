import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

// Define an interface for the experience item
interface ExperienceItem {
  company: string;
  logoUrl: string;
  logoAlt: string;
  aiHint: string;
  title: string;
  duration: string;
  description: string;
}

export function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      company: 'TechGiant Inc.',
      logoUrl: 'https://picsum.photos/40/40?random=1',
      logoAlt: 'TechGiant Logo',
      aiHint: 'modern tech company logo',
      title: 'Senior Front-End Developer',
      duration: 'Jan 2020 - Present',
      description: 'Led the development of key features for the main product, mentored junior developers, and improved front-end performance by 30%. Worked extensively with React, Next.js, and TypeScript.',
    },
    {
      company: 'Innovate Solutions',
      logoUrl: 'https://picsum.photos/40/40?random=2',
      logoAlt: 'Innovate Solutions Logo',
      aiHint: 'innovative startup logo',
      title: 'Front-End Developer',
      duration: 'Jun 2017 - Dec 2019',
      description: 'Developed and maintained client websites using various JavaScript frameworks. Collaborated with designers and back-end developers to deliver high-quality web applications.',
    },
    {
      company: 'Web Wizards Agency',
      logoUrl: 'https://picsum.photos/40/40?random=3',
      logoAlt: 'Web Wizards Logo',
      aiHint: 'creative agency logo',
      title: 'Junior Web Developer',
      duration: 'May 2015 - May 2017',
      description: 'Assisted senior developers in building responsive websites. Gained experience with HTML, CSS, JavaScript, and version control systems like Git.',
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
        <Briefcase className="mr-2 inline-block h-8 w-8" /> Work Experience
      </h2>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent md:before:mx-auto md:before:translate-x-0">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-px transform md:left-1/2 md:-translate-x-1/2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background">
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
              </div>
            </div>

            {/* Card */}
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-md transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Image
                  src={exp.logoUrl}
                  alt={exp.logoAlt}
                  width={40}
                  height={40}
                  className="rounded-md border"
                  data-ai-hint={exp.aiHint}
                />
                <div>
                  <CardTitle className="text-lg font-semibold">{exp.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {exp.company} <span className="text-muted-foreground">({exp.duration})</span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{exp.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
