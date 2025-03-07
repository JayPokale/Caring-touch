import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ServicesSection from "@/components/services-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <CTASection />
    </div>
  )
}