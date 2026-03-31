import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
              Как мы работаем
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              Гарантии
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Кейсы
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+79133993003"
              className="hidden md:block text-sm font-semibold hover:text-primary transition-colors"
            >
              +7 913 399-30-03
            </a>
            <Button size="sm" asChild>
              <a href="#contact">Записаться на аудит</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
