import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-3">Nexus AI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              ИИ-автоматизация бизнес-процессов с финансовой гарантией результата.
            </p>
            <p className="text-sm text-muted-foreground">© 2025 Nexus AI. Все права защищены.</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#process" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Как мы работаем
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Гарантии
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Контакты</h4>
            <a
              href="tel:+79133993003"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <Phone className="h-4 w-4" />
              +7 913 399-30-03
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Записаться на аудит →
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Nexus AI — независимый консультант по подбору и внедрению ИИ-решений
          </p>
        </div>
      </div>
    </footer>
  )
}
