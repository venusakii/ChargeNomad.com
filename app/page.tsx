import { AnimatedBackground } from "@/components/animated-background"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { TechnologySection } from "@/components/technology-section"
import { FeaturesSection } from "@/components/features-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <ProductsSection />
      <TechnologySection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
