import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react'; // Keep Code icon for default tech
import type { ExperienceData } from '@/lib/portfolio-data'; // Import the type

interface ExperienceSectionProps {
  data: ExperienceData;
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  const { title, items: experiences } = data;

  return (
    <section id="experience" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent md:before:mx-auto md:before:translate-x-0">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-px transform md:left-1/2 md:-translate-x-1/2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-border bg-background animate-pulsate">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
            </div>

            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-md transition-all duration-300 hover:scale-[1.02] hover:skew-x-1 hover:shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Image
                  src={exp.logoUrl}
                  alt={exp.logoAlt}
                  width={40}
                  height={40}
                  className="rounded-md border border-border"
                  data-ai-hint={exp.aiHint}
                />
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground">{exp.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {exp.company} <span>({exp.duration})</span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-foreground/80">{exp.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.techStack.map((techName) => (
                    <span
                      key={techName}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm"
                    >
                      {/* You might want to add a mapping for tech icons here if desired */}
                      <Code className="h-3 w-3" /> {/* Default icon */}
                      {techName}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
