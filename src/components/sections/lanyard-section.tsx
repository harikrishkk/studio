
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Icon as LucideIcon } from 'lucide-react';
import { LanyardCard, LanyardIdCard } from '@/components/ui/lanyard';
import type { LanyardData } from '@/lib/portfolio-data'; // Import the type
import { socialIconMap, skillIconMap } from '@/lib/portfolio-data'; // Import the icon maps
import { Code } from 'lucide-react'; // Import a default icon

interface LanyardSectionProps {
  data: LanyardData;
}

export function LanyardSection({ data }: LanyardSectionProps) {
  const { name, title, company, imageUrl, imageAiHint, description, skills, socialLinks } = data;

  return (
    <section id="about" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <LanyardCard className="mx-auto max-w-5xl"> {/* Apply max-width here */}
        <LanyardIdCard
          name={name}
          title={title}
          company={company}
          imageUrl={imageUrl}
          imageAlt={`${name}'s profile picture`}
          imageAiHint={imageAiHint}
        />
        <div className="p-6 md:p-8">
          <p className="mb-6 text-foreground/90">{description}</p>

          <h3 className="mb-3 text-xl font-semibold text-foreground">Skills</h3>
          <div className="mb-6 flex flex-wrap gap-3">
            {skills.map((skillName) => {
              const IconComponent = skillIconMap[skillName] || Code; // Use mapped skill icon or default Code
              return (
                <span
                  key={skillName}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-1.5 text-sm font-medium text-secondary-foreground backdrop-blur-sm border border-border/30"
                >
                  <IconComponent className="h-4 w-4 text-primary" /> {/* Use dynamic icon */}
                  {skillName}
                </span>
              );
            })}
          </div>

          <h3 className="mb-3 text-xl font-semibold text-foreground">Connect</h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const IconComponent = socialIconMap[link.icon] || Code; // Use mapped social icon or default
              return (
                <Button key={link.name} variant="outline" size="sm" asChild>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    <IconComponent className="mr-2 h-4 w-4" />
                    {link.name}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </LanyardCard>
    </section>
  );
}
