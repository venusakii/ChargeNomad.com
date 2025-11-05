import { Package, Users, Globe2, Award } from "lucide-react"

const stats = [
  {
    icon: Package,
    value: "50,000+",
    label: "Products Shipped",
  },
  {
    icon: Users,
    value: "35,000+",
    label: "Happy Customers",
  },
  {
    icon: Globe2,
    value: "150+",
    label: "Countries Covered",
  },
  {
    icon: Award,
    value: "15+",
    label: "Industry Awards",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 relative bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
