import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const cases = [
  {
    category: "Отдел продаж",
    problem: "Медленная обработка входящих заявок — менеджеры отвечали через 3–5 часов",
    solution: "AI-ассистент с мгновенной квалификацией лидов и авто-ответом",
    result: "+15% конверсии",
    period: "за 2 месяца",
    icon: "Users",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    category: "Служба поддержки",
    problem: "80% обращений — типовые вопросы, которые занимали время операторов",
    solution: "Чат-бот на базе базы знаний компании с передачей сложных кейсов",
    result: "-60% нагрузки",
    period: "на операторов",
    icon: "HeadphonesIcon",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    category: "Бухгалтерия / документы",
    problem: "Ручная обработка счетов и актов — 2–3 часа в день на рутину",
    solution: "AI-разбор входящих документов с автозаполнением в учётную систему",
    result: "-80% времени",
    period: "на документооборот",
    icon: "FileText",
    color: "from-green-500/20 to-green-600/5",
  },
  {
    category: "Маркетинг",
    problem: "Дорогой трафик при низкой конверсии рекламных кампаний",
    solution: "Автоматическая оптимизация аудиторий и A/B текстов через AI",
    result: "-30% стоимость лида",
    period: "за 6 недель",
    icon: "BarChart2",
    color: "from-orange-500/20 to-orange-600/5",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Сценарии окупаемости
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Как ИИ работает в <span className="text-primary">реальном бизнесе</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Типовые задачи, которые мы решаем — с измеримым результатом и чётким KPI в договоре.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
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
