import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Brain, ShieldCheck } from "lucide-react"
import { useEffect, useState } from "react"
import { HERO } from "@/content"

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
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-x-hidden py-10">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[300px] sm:w-[700px] h-[300px] sm:h-[500px] rounded-full blur-3xl animate-pulse"
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
          <span className="text-sm font-medium text-primary">{HERO.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 animate-fade-in-up leading-[1.1]">
          {HERO.headline}{" "}
          <span className="text-gradient relative inline-block">
            {HERO.headlineAccent}
            <svg className="absolute -bottom-1 left-0 w-full opacity-50" height="5" viewBox="0 0 200 5" fill="none">
              <path d="M2 3C60 1 140 1 198 3" stroke="hsl(210,100%,56%)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>{" "}
          {HERO.headlineSuffix}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          {HERO.subheading}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up animate-delay-200 mb-10 w-full px-2 sm:px-0">
          <Button
            size="lg"
            className="w-full sm:w-auto font-semibold px-6 sm:px-8 py-4 sm:py-5 text-base group shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
            asChild
          >
            <a href="#contact" className="flex items-center justify-center gap-2">
              {HERO.primaryButton}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary font-medium px-6 sm:px-8 py-4 sm:py-5 text-base bg-transparent"
            asChild
          >
            <a href="#process" className="flex items-center justify-center">{HERO.secondaryButton}</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
          {HERO.stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <div className="w-px h-4 bg-border hidden sm:block" />}
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${index * 0.5}s` }} />
              <span>{stat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}