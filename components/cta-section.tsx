import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { CurrentLines } from "./current-lines"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <CurrentLines />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Ready to Power Your Adventures?
          </h2>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of travelers who never worry about running out of battery. Get 20% off your first order
            today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Shop Now - 20% Off
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 bg-transparent"
            >
              View All Products
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Free shipping on orders over $50 • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}
