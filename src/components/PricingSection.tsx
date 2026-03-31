import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "1",
    title: "Оставьте заявку",
    description: "Ответим в течение рабочего дня",
  },
  {
    number: "2",
    title: "15-минутный звонок",
    description: "Находим узкое место и формулируем гипотезу",
  },
  {
    number: "3",
    title: "Получите план действий",
    description: "Конкретные шаги и список проверенных вендоров под вашу задачу",
  },
]

const benefits = [
  "Разберём, где ИИ даст быстрый результат",
  "Без давления и обязательств",
  "Конкретные гипотезы, а не общие слова",
  "Список проверенных вендоров под вашу задачу",
  "Оценка потенциального ROI для вашего бизнеса",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Бесплатно
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Бесплатная{" "}
            <span className="text-primary">15-минутная диагностика</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Разберём, где ИИ даст быстрый результат именно в вашем бизнесе. Без давления и обязательств.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="border-primary shadow-xl bg-gradient-to-b from-background to-primary/5">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Что вы получите</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full shadow-lg shadow-primary/20" asChild>
                <a href="#contact">Записаться на диагностику →</a>
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card key={index} className="hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
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
