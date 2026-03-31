import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Check } from "lucide-react"

const benefits = [
  "Разберём, где ИИ даст быстрый результат",
  "Без давления и обязательств",
  "Конкретные гипотезы, а не общие слова",
  "Список проверенных вендоров под вашу задачу",
  "Оценка потенциального ROI для вашего бизнеса",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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

          <Card className="border-primary shadow-xl bg-gradient-to-b from-background to-primary/5">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Что вы получите</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
