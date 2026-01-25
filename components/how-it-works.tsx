import { User, Smile, Camera, Eye, Share2, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: User,
    title: "Stap in de box",
    description:
      "De Magazine Cover Box heeft een luxe frame van 2 meter hoog en breed, groot genoeg voor één persoon of een hele groep.",
  },
  {
    number: "02",
    icon: Smile,
    title: "Kies je pose",
    description:
      "Ga staan alsof je op de cover van je eigen tijdschrift staat. Lach, poseer of doe iets geks, alles mag!",
  },
  {
    number: "03",
    icon: Camera,
    title: "Maak de foto",
    description:
      "Gebruik je eigen telefoon om de foto te maken. Zo bepaal je zelf het perfecte moment en kun je meerdere keren proberen.",
  },
  {
    number: "04",
    icon: Eye,
    title: "Bekijk je resultaat",
    description:
      "Binnen een paar seconden heb je je eigen 'magazine cover'-foto. Ideaal voor op social media of om te bewaren als herinnering.",
  },
  {
    number: "05",
    icon: Share2,
    title: "Deel het moment",
    description:
      "De foto's kunnen direct worden gedeeld met vrienden, familie of collega's. Perfect voor feestjes, bruiloften of bedrijfsfeesten.",
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
            Ontdek hoe eenvoudig het is om prachtige magazine cover foto's te maken met de Magazine Cover Box.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-card p-6 md:p-8 rounded-xl border border-border text-center flex flex-col h-full w-full">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                <span className="text-xs font-medium text-gold uppercase tracking-widest">
                  Stap {step.number}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Note */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-card px-6 py-4 rounded-xl border border-border">
            <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-gold" />
            </div>
            <p className="text-foreground leading-relaxed">
              Geen printer, geen wachtrijen, geen gedoe. Gewoon pure beleving in een stijlvolle box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
