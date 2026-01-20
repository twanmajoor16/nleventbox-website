import { MessageCircle, FileText, CalendarCheck, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Neem Contact Op",
    description:
      "Stuur ons een bericht via het contactformulier of WhatsApp. Vertel ons over jullie grote dag.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Ontvang Offerte",
    description:
      "Binnen 24 uur ontvangen jullie een persoonlijke offerte op maat, afgestemd op jullie wensen.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Bevestig Boeking",
    description:
      "Na akkoord reserveren wij de datum. Met een aanbetaling is jullie photobooth verzekerd.",
  },
  {
    number: "04",
    icon: PartyPopper,
    title: "Geniet van het Feest",
    description:
      "Wij zorgen voor alles op de dag zelf. Jullie en jullie gasten hoeven alleen maar te genieten!",
  },
];

export function HowItWorks() {
  return (
    <section id="hoe-werkt-het" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
            Simpel & Makkelijk
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Hoe werkt het?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            In vier eenvoudige stappen naar een onvergetelijke photobooth ervaring op jullie bruiloft.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-card p-6 md:p-8 rounded-xl border border-border text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                <span className="text-xs font-medium text-gold uppercase tracking-widest">
                  Stap {step.number}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
