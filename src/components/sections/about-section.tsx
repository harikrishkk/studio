import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Youtube, Rss, Linkedin } from 'lucide-react';

export function AboutSection() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Firebase', 'GraphQL', 'Docker'];
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
    { name: 'YouTube', url: 'https://youtube.com/yourchannel', icon: Youtube },
    { name: 'Blog', url: 'https://yourblog.com', icon: Rss },
  ];

  return (
    <section id="about" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-muted p-6 md:p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <Image
              src="https://picsum.photos/150/150"
              alt="Profile Picture"
              width={150}
              height={150}
              // Removed border-primary, border color comes from theme
              className="rounded-full border-4 shadow-md"
              data-ai-hint="professional developer portrait"
            />
            <div className="text-center md:text-left">
              {/* Removed text-primary */}
              <CardTitle className="text-3xl font-bold md:text-4xl">
                Your Name Here
              </CardTitle>
              <p className="mt-1 text-lg text-muted-foreground">Seasoned Front-End Developer</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <p className="mb-6 text-foreground/90">
            Passionate and experienced front-end developer with a knack for building beautiful, performant, and user-friendly web applications. Specializing in modern JavaScript frameworks and dedicated to writing clean, maintainable code. Always eager to learn and explore new technologies. Based in Canada, eh! 🍁
          </p>

          {/* Removed text-secondary */}
          <h3 className="mb-3 text-xl font-semibold">Skills</h3>
          <div className="mb-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              // Removed explicit primary colors, using default badge styles
              <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground">
                {skill}
              </span>
            ))}
          </div>

          {/* Removed text-secondary */}
          <h3 className="mb-3 text-xl font-semibold">Connect</h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="sm" asChild>
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.name}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
