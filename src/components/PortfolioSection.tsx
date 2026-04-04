import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { PORTFOLIO } from "@/content"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            {PORTFOLIO.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            {PORTFOLIO.title} <span className="text-primary">{PORTFOLIO.titleAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {PORTFOLIO.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO.cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${item.color} p-6 border-b border-border`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon name={item.icon} className="h-5 w-5" fallback="Sparkles" />
                    </div>
                    <span className="font-bold text-lg">{item.category}</span>
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-3xl font-bold text-primary">{item.result}</span>
                    <span className="text-muted-foreground mb-1">{item.period}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Проблема</p>
                    <p className="text-sm leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Решение</p>
                    <p className="text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
