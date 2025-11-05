import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Battery, Cable, Plug2, Zap } from "lucide-react"

const products = [
  {
    icon: Plug2,
    name: "Universal Travel Adapter",
    description: "Works in 150+ countries with 4 USB ports and 100W power delivery",
    price: "$49.99",
    image: "/universal-travel-adapter-with-multiple-plugs.jpg",
  },
  {
    icon: Battery,
    name: "PowerBank Pro 30000mAh",
    description: "Charge your laptop, tablet, and phone multiple times on a single charge",
    price: "$89.99",
    image: "/sleek-black-powerbank-with-led-display.jpg",
  },
  {
    icon: Cable,
    name: "Universal Cable Kit",
    description: "5-in-1 cable supporting USB-C, Lightning, Micro-USB with fast charging",
    price: "$29.99",
    image: "/multi-connector-charging-cable-kit.jpg",
  },
  {
    icon: Zap,
    name: "Charging Station Hub",
    description: "Charge 6 devices simultaneously with intelligent power distribution",
    price: "$79.99",
    image: "/modern-charging-station-with-multiple-ports.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium charging solutions engineered for travelers who demand reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.name}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <product.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{product.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Buy Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
