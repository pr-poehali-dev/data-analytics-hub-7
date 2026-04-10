import { Phone } from "lucide-react"
import { COMPANY, FOOTER } from "@/content"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-3">{COMPANY.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {COMPANY.tagline}
            </p>
            <p className="text-sm text-muted-foreground">{COMPANY.copyright}</p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-4">{FOOTER.navTitle}</h4>
            <ul className="space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-4">{FOOTER.contactsTitle}</h4>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              {FOOTER.ctaLink}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            {COMPANY.footerNote}
          </p>
        </div>
      </div>
    </footer>
  )
}