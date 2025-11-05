import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Digital Nomad",
    image: "/professional-woman-smiling.png",
    rating: 5,
    text: "This is the only charger I travel with now. It works everywhere and charges all my devices super fast!",
  },
  {
    name: "Michael Chen",
    role: "Travel Photographer",
    image: "/professional-man-with-camera.jpg",
    rating: 5,
    text: "As a photographer, I need reliable power for my gear. ChargeNomad has never let me down in 30+ countries.",
  },
  {
    name: "Emma Rodriguez",
    role: "Business Consultant",
    image: "/business-woman-professional.jpg",
    rating: 5,
    text: "The build quality is exceptional. Worth every penny for frequent travelers like myself.",
  },
  {
    name: "David Park",
    role: "Software Engineer",
    image: "/tech-professional-man.png",
    rating: 5,
    text: "Finally, a charger that can handle my laptop, phone, and tablet all at once. Game changer!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ChargeNomad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-card/50 backdrop-blur border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="text-2xl font-bold text-primary">4.9/5</span>
            <span>from 2,847 reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
