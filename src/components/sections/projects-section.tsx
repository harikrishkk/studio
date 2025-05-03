import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  aiHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'Project Maple',
      description: 'A comprehensive web application built with Next.js and Tailwind CSS, showcasing interactive data visualizations.',
      imageUrl: 'https://picsum.photos/600/400?random=4',
      aiHint: 'web application screenshot dashboard',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      liveUrl: '#', // Replace with actual URL
      repoUrl: '#', // Replace with actual URL
    },
    {
      title: 'Portfolio v2',
      description: 'The very portfolio you are looking at! Designed with a Canadian theme and built for performance.',
      imageUrl: 'https://picsum.photos/600/400?random=5',
      aiHint: 'portfolio website design code',
      tags: ['Next.js', 'ShadCN UI', 'Tailwind CSS', 'Framer Motion'],
      repoUrl: '#', // Replace with actual URL
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blogging platform featuring markdown support, user authentication, and a clean interface.',
      imageUrl: 'https://picsum.photos/600/400?random=6',
      aiHint: 'blog website interface article',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth'],
      liveUrl: '#', // Replace with actual URL
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
        <FolderGit2 className="mr-2 inline-block h-8 w-8" /> Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-card/80 backdrop-blur-sm"> {/* Slightly transparent card with hover effect */}
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={`${project.title} Screenshot`}
                fill // Changed layout to fill for better responsiveness
                style={{objectFit: "cover"}} // Updated from objectFit prop
                className="bg-muted"
                 data-ai-hint={project.aiHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-foreground">{project.title}</CardTitle>
              <CardDescription className="h-10 overflow-hidden text-ellipsis text-muted-foreground"> {/* Fixed height for description */}
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  // Use secondary background with slightly higher opacity for contrast
                  <span key={tag} className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t border-border/50 pt-4"> {/* Slightly transparent border */}
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
