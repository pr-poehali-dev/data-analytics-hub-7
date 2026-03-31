import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Fragment } from "react"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "ScanSearch",
    title: "Экспресс-аудит процессов",
    description:
      "Наш ИИ-архитектор изучает ваш бизнес и находит точки, где автоматизация даст максимальный ROI. Без воды и общих слов — только конкретные гипотезы.",
    number: "01",
  },
  {
    icon: "ListChecks",
    title: "Подбор верифицированного решения",
    description:
      "Выбираем из закрытой базы 2–3 вендора, прошедших жёсткий технический и коммерческий аудит. Вы получаете готовое сравнение без маркетинговых обещаний.",
    number: "02",
  },
  {
    icon: "ShieldCheck",
    title: "Безопасная сделка",
    description:
      "Фиксируем конкретный KPI в договоре. Оплата поступает на независимый банковский сервис безопасных сделок: средства не достаются никому до подписания акта приёмки.",
    number: "03",
  },
  {
    icon: "BarChart2",
    title: "Контроль внедрения",
    description:
      "Мы следим за тем, чтобы ИИ работал как договорились. Только после подтверждения метрик рассчитываемся с вендором.",
    number: "04",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-14 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Процесс
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            От <span className="text-primary">аудита</span> до <span className="text-primary">внедрения</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Четыре понятных шага, которые защищают ваш бюджет и обеспечивают результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background">
                <div className="absolute top-0 right-0 text-[120px] font-bold bg-gradient-to-br from-primary/10 to-primary/5 bg-clip-text text-transparent leading-none p-4">
                  {step.number}
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-6">
                    <Icon name={step.icon} className="h-6 w-6" fallback="Sparkles" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${(index + 1) * 25 - 4}%` }}
                >
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}