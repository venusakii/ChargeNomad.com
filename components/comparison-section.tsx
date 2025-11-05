import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparisons = [
  { feature: "Universal compatibility", us: true, others: false },
  { feature: "100W power delivery", us: true, others: false },
  { feature: "GaN technology", us: true, others: false },
  { feature: "Smart power distribution", us: true, others: false },
  { feature: "Compact design", us: true, others: true },
  { feature: "2-year warranty", us: true, others: false },
  { feature: "Multiple device charging", us: true, others: true },
  { feature: "Travel-friendly", us: true, others: true },
]

export function ComparisonSection() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ChargeNomad vs Others
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See why thousands of travelers choose ChargeNomad over traditional chargers
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur border-border overflow-hidden">
          <div className="grid grid-cols-3 bg-muted/50 p-4 font-bold text-card-foreground">
            <div>Feature</div>
            <div className="text-center text-primary">ChargeNomad</div>
            <div className="text-center">Others</div>
          </div>
          {comparisons.map((item, index) => (
            <div
              key={item.feature}
              className={`grid grid-cols-3 p-4 items-center ${index % 2 === 0 ? "bg-card/50" : "bg-card/30"}`}
            >
              <div className="text-card-foreground">{item.feature}</div>
              <div className="flex justify-center">
                {item.us ? <Check className="w-6 h-6 text-primary" /> : <X className="w-6 h-6 text-muted-foreground" />}
              </div>
              <div className="flex justify-center">
                {item.others ? (
                  <Check className="w-6 h-6 text-muted-foreground" />
                ) : (
                  <X className="w-6 h-6 text-muted-foreground" />
                )}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  )
}
