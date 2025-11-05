import { Card } from "@/components/ui/card"
import { Cpu, Shield, Zap, Thermometer } from "lucide-react"

const technologies = [
  {
    icon: Zap,
    title: "GaN Technology",
    description: "Gallium Nitride chips deliver 3x faster charging in 40% smaller size",
  },
  {
    icon: Shield,
    title: "Smart Protection",
    description: "Advanced circuitry protects against overcharging, overheating, and short circuits",
  },
  {
    icon: Cpu,
    title: "AI Power Distribution",
    description: "Intelligent chip automatically allocates optimal power to each connected device",
  },
  {
    icon: Thermometer,
    title: "Thermal Management",
    description: "Active cooling system maintains safe temperatures during intensive charging",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 relative bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovation that powers your adventures with safety and efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <Card
              key={tech.title}
              className="bg-card/50 backdrop-blur border-border p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <tech.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{tech.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl" />
          <Card className="relative bg-card/80 backdrop-blur border-primary/30 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-card-foreground">Power Delivery 3.1</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Experience the latest USB Power Delivery standard with up to 100W output. Charge your MacBook Pro,
                  gaming laptop, or any USB-C device at maximum speed.
                </p>
                <ul className="space-y-3">
                  {["0-50% in 30 minutes", "Universal compatibility", "Bidirectional charging", "Cable included"].map(
                    (feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="relative h-64 md:h-80">
                <img
                  src="/futuristic-charging-technology-circuit-board.jpg"
                  alt="Technology"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
