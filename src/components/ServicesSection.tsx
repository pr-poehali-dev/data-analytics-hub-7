import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { SERVICES } from "@/content"

export function ServicesSection() {
  return (
    <section id="services" className="py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            {SERVICES.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-balance">
            {SERVICES.title} <span className="text-primary">{SERVICES.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {SERVICES.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.items.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" fallback="Sparkles" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
