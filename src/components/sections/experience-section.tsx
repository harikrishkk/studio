import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Code } from 'lucide-react'; // Keep Code icon for default tech

// Define a type for skills including an optional icon component
interface TechStackItem {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>; // Optional icon component
}

// Define an interface for the experience item
interface ExperienceItem {
  company: string;
  logoUrl: string;
  logoAlt: string;
  aiHint: string;
  title: string;
  duration: string;
  description: string;
  techStack: TechStackItem[]; // Added techStack property
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
      description: 'Led the development of key features for the main product, mentored junior developers, and improved front-end performance by 30%.',
      techStack: [
        { name: 'React', Icon: Code },
        { name: 'Next.js', Icon: Code },
        { name: 'TypeScript', Icon: Code },
        { name: 'Tailwind CSS', Icon: Code },
        { name: 'Node.js', Icon: Code },
      ],
    },
    {
      company: 'Innovate Solutions',
      logoUrl: 'https://picsum.photos/40/40?random=2',
      logoAlt: 'Innovate Solutions Logo',
      aiHint: 'innovative startup logo',
      title: 'Front-End Developer',
      duration: 'Jun 2017 - Dec 2019',
      description: 'Developed and maintained client websites using various JavaScript frameworks. Collaborated with designers and back-end developers to deliver high-quality web applications.',
      techStack: [
        { name: 'Vue.js', Icon: Code },
        { name: 'JavaScript (ES6+)', Icon: Code },
        { name: 'SCSS', Icon: Code },
        { name: 'Webpack', Icon: Code },
        { name: 'REST APIs', Icon: Code },
      ],
    },
    {
      company: 'Web Wizards Agency',
      logoUrl: 'https://picsum.photos/40/40?random=3',
      logoAlt: 'Web Wizards Logo',
      aiHint: 'creative agency logo',
      title: 'Junior Web Developer',
      duration: 'May 2015 - May 2017',
      description: 'Assisted senior developers in building responsive websites. Gained experience with HTML, CSS, JavaScript, and version control systems like Git.',
      techStack: [
        { name: 'HTML5', Icon: Code },
        { name: 'CSS3', Icon: Code },
        { name: 'jQuery', Icon: Code },
        { name: 'Git', Icon: Code },
        { name: 'PHP', Icon: Code }, // Added PHP as an example
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
        Work Experience {/* Removed Briefcase icon */}
      </h2>
      {/* Updated timeline gradient to use theme variables */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent md:before:mx-auto md:before:translate-x-0">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot - adjusted colors for theme */}
            <div className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-px transform md:left-1/2 md:-translate-x-1/2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-border bg-background">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
            </div>

            {/* Card - made slightly transparent and added hover effect with scale and skew */}
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-md transition-all duration-300 hover:scale-[1.02] hover:skew-x-1 hover:shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Image
                  src={exp.logoUrl}
                  alt={exp.logoAlt}
                  width={40}
                  height={40}
                  className="rounded-md border border-border" // Use theme border
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
                <p className="mb-4 text-sm text-foreground/80">{exp.description}</p> {/* Added margin-bottom */}
                {/* Tech Stack Section */}
                <div className="mt-3 flex flex-wrap gap-2"> {/* Added top margin */}
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      // Using secondary for tech stack badges for subtle differentiation
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm"
                    >
                      {tech.Icon ? <tech.Icon className="h-3 w-3" /> : <Code className="h-3 w-3" />} {/* Render icon or fallback */}
                      {tech.name}
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
