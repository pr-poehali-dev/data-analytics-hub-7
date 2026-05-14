import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { TESTIMONIALS } from "@/content"

function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  )
}

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-balance">
          {TESTIMONIALS.title}
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          {TESTIMONIALS.subtitle}
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-4 sm:gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...TESTIMONIALS.items, ...TESTIMONIALS.items].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[80vw] sm:w-[380px] lg:w-[450px] border-none shadow-lg">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed text-pretty min-h-[80px] sm:min-h-[120px]">
                    {renderBold(testimonial.quote)}
                  </p>
                  <div>
                    <p className="font-semibold text-base sm:text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
