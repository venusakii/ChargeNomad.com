import { Globe, Leaf, Award, Smartphone, Luggage, Clock } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Universal Compatibility",
    description: "Works with outlets in 150+ countries across all continents",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Charging",
    description: "Charge up to 6 devices simultaneously without compromising speed",
  },
  {
    icon: Luggage,
    title: "Travel-Friendly Design",
    description: "Compact, lightweight, and TSA-approved for carry-on luggage",
  },
  {
    icon: Clock,
    title: "Fast Charging",
    description: "Get 50% battery in 30 minutes with our rapid charging technology",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Energy-efficient design reduces power consumption by 30%",
  },
  {
    icon: Award,
    title: "2-Year Warranty",
    description: "Premium quality backed by comprehensive warranty coverage",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Choose ChargeNomad
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Features designed specifically for the needs of modern travelers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
