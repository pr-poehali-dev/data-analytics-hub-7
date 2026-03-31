import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Brain, ShieldCheck } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-10">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[700px] h-[500px] rounded-full blur-3xl animate-pulse"
          style={{
            top: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, hsl(210 100% 56% / 0.13), transparent 70%)",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full blur-3xl animate-pulse"
          style={{
            bottom: "5%",
            right: "5%",
            background: "radial-gradient(circle, hsl(196 100% 50% / 0.07), transparent 70%)",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-[220px] h-[220px] rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 110}px`,
            top: `${mousePosition.y - 110}px`,
            background: "radial-gradient(circle, hsl(210 100% 56% / 0.06), transparent 70%)",
          }}
        />
      </div>

      {/* Floating icons — hidden on small screens */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <Brain
          className="absolute text-primary/15 animate-float"
          style={{ top: "20%", left: "6%", animationDelay: "0s" }}
          size={36}
        />
        <ShieldCheck
          className="absolute text-primary/15 animate-float"
          style={{ top: "20%", right: "6%", animationDelay: "2s" }}
          size={32}
        />
        <Sparkles
          className="absolute text-primary/15 animate-float"
          style={{ bottom: "25%", left: "10%", animationDelay: "1s" }}
          size={26}
        />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-5 animate-fade-in-up backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Независимая ИИ-интеграция</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 animate-fade-in-up leading-[1.1]">
          Внедряйте ИИ в бизнес{" "}
          <span className="text-gradient relative inline-block">
            без риска
            <svg className="absolute -bottom-1 left-0 w-full opacity-50" height="5" viewBox="0 0 200 5" fill="none">
              <path d="M2 3C60 1 140 1 198 3" stroke="hsl(210,100%,56%)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>{" "}
          потерять бюджет
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Независимый аудит процессов, подбор ИИ-решения из сотен протестированных вендоров и финансовая гарантия результата через систему эскроу.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up animate-delay-200 mb-10">
          <Button
            size="lg"
            className="w-full sm:w-auto font-semibold px-8 py-5 text-base group shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
            asChild
          >
            <a href="#contact">
              Записаться на аудит
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary font-medium px-8 py-5 text-base bg-transparent"
            asChild
          >
            <a href="#process">Как это работает?</a>
          </Button>
        </div>

        {/* Stats — compact, no duplication */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>ROI 200%+ подтверждённый</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>100% гарантия возврата</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span>15 мин бесплатная диагностика</span>
          </div>
        </div>
      </div>
    </section>
  )
}
