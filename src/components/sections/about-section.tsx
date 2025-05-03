import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Youtube, Rss, Linkedin, Code } from 'lucide-react'; // Added Code icon

// Define a type for skills including an optional icon component
interface Skill {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>; // Optional icon component
}

export function AboutSection() {
  // Updated skills array to include icons (using Code as placeholder)
  const skills: Skill[] = [
    { name: 'React', Icon: Code },
    { name: 'Next.js', Icon: Code },
    { name: 'TypeScript', Icon: Code },
    { name: 'Tailwind CSS', Icon: Code },
    { name: 'Node.js', Icon: Code },
    { name: 'Firebase', Icon: Code },
    { name: 'GraphQL', Icon: Code },
    { name: 'Docker', Icon: Code },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
    { name: 'YouTube', url: 'https://youtube.com/yourchannel', icon: Youtube },
    { name: 'Blog', url: 'https://yourblog.com', icon: Rss },
  ];

  return (
    <section id="about" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <Card className="overflow-hidden shadow-lg bg-card/80 backdrop-blur-sm"> {/* Slightly transparent card */}
        <CardHeader className="bg-muted/50 p-6 md:p-8"> {/* Slightly transparent header */}
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <Image
              src="https://picsum.photos/150/150"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full border-4 border-border shadow-md" // Use theme border color
              data-ai-hint="professional developer portrait"
            />
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl font-bold text-foreground md:text-4xl">
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

          <h3 className="mb-3 text-xl font-semibold text-foreground">Skills</h3>
          <div className="mb-6 flex flex-wrap gap-3"> {/* Increased gap */}
            {skills.map((skill) => (
              // Use primary background with slightly higher opacity for better contrast
              // Added flex and items-center to align icon and text
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm" // Adjusted padding and added gap
              >
                {skill.Icon && <skill.Icon className="h-4 w-4" />} {/* Render icon if provided */}
                {skill.name}
              </span>
            ))}
          </div>

          <h3 className="mb-3 text-xl font-semibold text-foreground">Connect</h3>
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
