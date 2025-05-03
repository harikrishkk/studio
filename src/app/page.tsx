
import { LanyardSection } from '@/components/sections/lanyard-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getPortfolioData } from '@/lib/portfolio-data'; // Import the data loading function

export default function Home() {
  const portfolioData = getPortfolioData(); // Load data once

  return (
    <> {/* Use Fragment instead of div */}
      <Header data={portfolioData.header} />
      {/* Use container for consistent padding and centering */}
      <div className="container mx-auto flex-grow px-4 py-12 md:px-6 lg:py-16">
        <LanyardSection data={portfolioData.lanyard} />
        <ExperienceSection data={portfolioData.experience} />
        <ProjectsSection data={portfolioData.projects} />
        <TestimonialsSection data={portfolioData.testimonials} />
        <ContactSection data={portfolioData.contact} />
      </div>
      <Footer data={portfolioData.footer} />
    </>
  );
}
