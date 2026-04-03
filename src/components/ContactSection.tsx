import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Send, Clock, CheckCircle } from "lucide-react"
import func2url from "../../backend/func2url.json"

const PHONE = "+79133993003"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch(func2url["send-telegram"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus("success")
        setFormData({ name: "", phone: "", message: "" })
      } else {
        setStatus("error")
        setErrorMsg(data.error || "Ошибка отправки")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Нет соединения. Попробуйте ещё раз.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-14 gap-5 text-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      <div className="relative p-4 rounded-full bg-primary/10">
                        <CheckCircle className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Отлично! Заявка принята 🎉</h3>
                      <p className="text-muted-foreground max-w-sm leading-relaxed">
                        Ваша заявка уже у нас. Свяжемся с вами в течение рабочего дня, чтобы назначить бесплатную 15-минутную диагностику.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                      <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
                        Отправить ещё одну
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Ваше имя *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Иван Петров"
                        required
                        className="transition-all focus:scale-[1.02]"
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Телефон или Telegram *</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 900 000-00-00 или @username"
                        required
                        className="transition-all focus:scale-[1.02]"
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Ваш вопрос по внедрению ИИ</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Например: как ускорить обработку заявок от клиентов?"
                        rows={5}
                        className="transition-all focus:scale-[1.02]"
                        disabled={status === "loading"}
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-sm text-destructive">{errorMsg}</p>
                    )}
                    <div>
                      <Button type="submit" size="lg" className="w-full sm:w-auto group" disabled={status === "loading"}>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                      </Button>
                      <p className="text-xs text-muted-foreground mt-3">
                        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Позвонить</h3>
                    <a
                      href={`tel:${PHONE}`}
                      className="block text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-3"
                    >
                      {PHONE.replace("+7", "+7 ").replace(/(\d{3})(\d{3})(\d{2})(\d{2})$/, "$1 $2-$3-$4")}
                    </a>
                    <Button size="sm" asChild className="w-full">
                      <a href={`tel:${PHONE}`}>
                        <Phone className="mr-2 h-3.5 w-3.5" />
                        Позвонить сейчас
                      </a>
                    </Button>
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
                  При работе с нами ваши деньги в безопасности. Вендор получает оплату только после подтверждения KPI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}