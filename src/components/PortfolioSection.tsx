import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { PORTFOLIO } from "@/content"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-7 sm:mb-10">
          <div className="inline-block mb-3 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            {PORTFOLIO.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-balance">
            {PORTFOLIO.title} <span className="text-primary">{PORTFOLIO.titleAccent}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {PORTFOLIO.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {PORTFOLIO.cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${item.color} p-4 sm:p-6 border-b border-border`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Icon name={item.icon} className="h-4 w-4 sm:h-5 sm:w-5" fallback="Sparkles" />
                    </div>
                    <span className="font-bold text-base sm:text-lg">{item.category}</span>
                  </div>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">{item.result}</span>
                    <span className="text-muted-foreground mb-0.5 text-sm">{item.period}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Проблема</p>
                    <p className="text-xs sm:text-sm leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Решение</p>
                    <p className="text-xs sm:text-sm leading-relaxed">{item.solution}</p>
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
