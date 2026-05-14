import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PRICING } from "@/content"

export function PricingSection() {
  return (
    <section id="pricing" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
          <Card className="border-primary shadow-xl bg-gradient-to-b from-background to-primary/5">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl">{PRICING.cardTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {PRICING.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full shadow-lg shadow-primary/20" asChild>
                <a href="#contact" className="flex items-center justify-center">{PRICING.ctaButton}</a>
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-3 sm:space-y-4">
            {PRICING.steps.map((step, index) => (
              <Card key={index} className="hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
