import type React from "react"
import { useState } from "react"

function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Send, Clock, CheckCircle } from "lucide-react"
import func2url from "../../backend/func2url.json"
import { COMPANY, CONTACT } from "@/content"

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
    <section id="contact" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-7 sm:mb-10">
          <div className="inline-block mb-3 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            {CONTACT.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-balance">
            {CONTACT.title} <span className="text-primary">{CONTACT.titleAccent}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {CONTACT.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl bg-background">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl">{CONTACT.formTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-10 sm:py-14 gap-4 sm:gap-5 text-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      <div className="relative p-3 sm:p-4 rounded-full bg-primary/10">
                        <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{CONTACT.successTitle}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground max-w-sm leading-relaxed">
                        {CONTACT.successText}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
                      {CONTACT.sendAnother}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">{CONTACT.fields.name.label}</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={CONTACT.fields.name.placeholder}
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">{CONTACT.fields.phone.label}</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={CONTACT.fields.phone.placeholder}
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">{CONTACT.fields.message.label}</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={CONTACT.fields.message.placeholder}
                        rows={4}
                        disabled={status === "loading"}
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-sm text-destructive">{errorMsg}</p>
                    )}
                    <div>
                      <Button type="submit" className="w-full group" disabled={status === "loading"}>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        {status === "loading" ? CONTACT.submittingButton : CONTACT.submitButton}
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 sm:mt-3">
                        {CONTACT.privacyNote}
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3 sm:space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{CONTACT.callCard.title}</h3>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="block text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-2 sm:mb-3"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                    <Button size="sm" asChild className="w-full">
                      <a href={`tel:${COMPANY.phone}`} className="flex items-center justify-center gap-2">
                        <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                        {CONTACT.callCard.button}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-1">{CONTACT.hoursCard.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {CONTACT.hoursCard.hours}
                      <br />
                      {CONTACT.hoursCard.note}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{CONTACT.escrowCard.title}</h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  {renderBold(CONTACT.escrowCard.text)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
