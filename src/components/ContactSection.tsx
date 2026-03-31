import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Send, Clock } from "lucide-react"

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

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[nexus] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-14 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Бесплатно
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Бесплатная <span className="text-primary">15-минутная диагностика</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Разберём, где ИИ даст быстрый результат именно в вашем бизнесе. Без давления и обязательств.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Петров"
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Телефон или Telegram *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 900 000-00-00 или @username"
                      required
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Ваш вопрос по внедрению ИИ
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Например: как ускорить обработку заявок от клиентов?"
                      rows={5}
                      className="transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto group">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a
                      href="tel:+79133993003"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +7 913 399-30-03
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Время работы</h3>
                    <p className="text-sm text-muted-foreground">
                      Пн – Пт: 9:00 – 18:00
                      <br />
                      Ответим в течение рабочего дня
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Эскроу-гарантия</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Ваши деньги в безопасности. Вендор получает оплату только после подтверждения KPI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}