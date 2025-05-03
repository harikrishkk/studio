import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { ProjectsData } from '@/lib/portfolio-data'; // Import the type

interface ProjectsSectionProps {
  data: ProjectsData;
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  const { title, items: projects } = data;

  return (
    <section id="projects" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
         {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:skew-x-1 hover:shadow-xl bg-card/80 backdrop-blur-sm">
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={`${project.title} Screenshot`}
                fill
                style={{objectFit: "cover"}}
                className="bg-muted"
                 data-ai-hint={project.aiHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-foreground">{project.title}</CardTitle>
              <CardDescription className="h-10 overflow-hidden text-ellipsis text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t border-border/50 pt-4">
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {project.repoUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-4 w-4" /> Repository
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
