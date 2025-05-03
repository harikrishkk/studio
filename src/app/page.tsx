import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section'; // Import the new section
import { ContactSection } from '@/components/sections/contact-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col"> {/* Ensure content is above fixed background */}
      <Header />
      <div className="container mx-auto flex-grow px-4 py-12 md:px-6 lg:py-16">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection /> {/* Add the new section here */}
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
