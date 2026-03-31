import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Clock",
    title: "Экономия времени",
    description:
      "Вам не нужно общаться с сотнями ИТ-студий. Мы уже отсеяли 90% некомпетентных команд. Получаете 2–3 проверенных варианта — и только финальный выбор за вами.",
  },
  {
    icon: "ShieldOff",
    title: "Полная независимость",
    description:
      "Мы не продаём свой софт. Наша задача — найти лучшее решение на рынке именно под вашу задачу. Нет скрытых комиссий, нет аффилированных вендоров.",
  },
  {
    icon: "Banknote",
    title: "Финансовый щит",
    description:
      "Если вендор не выполнит KPI — деньги вернутся вам. Это жёсткое условие нашего эскроу-протокола. Оплата поступает подрядчику только после подтверждённого результата.",
  },
  {
    icon: "Search",
    title: "Верифицированные вендоры",
    description:
      "Выбираем из закрытой базы вендоров, прошедших жёсткий технический и коммерческий аудит. Вы получаете готовое сравнение без маркетинговых обещаний.",
  },
  {
    icon: "TrendingUp",
    title: "Измеримый ROI",
    description:
      "Фиксируем конкретный KPI в договоре — например, снижение стоимости лида на 20%. Никаких размытых обещаний, только измеримые бизнес-результаты.",
  },
  {
    icon: "Eye",
    title: "Контроль внедрения",
    description:
      "Мы следим за тем, чтобы ИИ работал как договорились. Только после подтверждения метрик рассчитываемся с вендором. Вы всегда в курсе происходящего.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          В чём ваша выгода
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Три причины выбрать <span className="text-primary">Nexus AI</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Мы не просто подбираем ИИ-инструменты — мы берём на себя финансовый и операционный риск внедрения.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
