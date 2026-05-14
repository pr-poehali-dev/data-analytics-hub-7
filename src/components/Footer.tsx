import { Phone } from "lucide-react"
import { COMPANY, FOOTER } from "@/content"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{COMPANY.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              {COMPANY.tagline}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">{COMPANY.copyright}</p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">{FOOTER.navTitle}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">{FOOTER.contactsTitle}</h4>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors mb-3 sm:mb-4"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
              {COMPANY.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              {FOOTER.ctaLink}
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            {COMPANY.footerNote}
          </p>
        </div>
      </div>
    </footer>
  )
}
