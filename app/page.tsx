import HeroSection        from '@/components/home/HeroSection'
import ServicesSection    from '@/components/home/ServicesSection'
import ArchitectureShowcase from '@/components/home/ArchitectureShowcase'
import FeaturedProjects   from '@/components/home/FeaturedProjects'
import ExperienceTimeline from '@/components/home/ExperienceTimeline'
import InsightsPreview    from '@/components/home/InsightsPreview'
import ApproachSection    from '@/components/home/ApproachSection'
import ContactCTA         from '@/components/shared/ContactCTA'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ArchitectureShowcase />
      <FeaturedProjects />
      <ExperienceTimeline />
      <InsightsPreview />
      <ApproachSection />
      <ContactCTA
        heading="Let's Build Something Valuable"
        description="Interested in AI implementation, architecture, automation, or engineering leadership opportunities?"
        buttonText="Contact Me"
        buttonHref="/contact"
      />
    </main>
  )
}
