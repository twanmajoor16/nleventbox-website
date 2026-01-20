import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basis",
    price: "549",
    duration: "3 uur",
    description: "Perfect voor kleinere feesten en intimere vieringen.",
    features: [
      "3 uur photobooth verhuur",
      "Professionele belichting",
      "Digitale foto galerij",
      "Basis props collectie",
      "1 ervaren begeleider",
      "Onbeperkt foto's maken",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "749",
    duration: "5 uur",
    description: "Onze populairste keuze voor bruiloften en verjaardagen.",
    features: [
      "5 uur photobooth verhuur",
      "Professionele studio belichting",
      "Digitale foto galerij + download",
      "Premium props collectie",
      "2 ervaren begeleiders",
      "Onbeperkt foto's maken",
      "Gepersonaliseerde achtergrond",
      "WhatsApp delen voor gasten",
    ],
    popular: true,
  },
  {
    name: "Luxe",
    price: "999",
    duration: "Hele avond",
    description: "De ultieme ervaring voor jullie speciale dag.",
    features: [
      "Hele avond photobooth verhuur",
      "Premium studio belichting",
      "Digitale foto galerij + USB",
      "Premium props collectie",
      "2 ervaren begeleiders",
      "Onbeperkt foto's maken",
      "Custom achtergrond ontwerp",
      "WhatsApp + e-mail delen",
      "Fysiek fotoalbum (20 pagina's)",
    ],
    popular: false,
  },
];

export function Packages() {
  return (
    <section id="pakketten" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
            Onze Pakketten
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Transparante prijzen, geen verrassingen
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Kies het pakket dat het beste bij jullie past. Alle prijzen zijn inclusief BTW, 
            levering en installatie binnen heel Nederland.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl border ${
                pkg.popular ? "border-gold shadow-xl" : "border-border"
              } overflow-hidden`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gold text-foreground text-sm font-medium text-center py-2">
                  Meest Gekozen
                </div>
              )}

              <div className={`p-6 md:p-8 ${pkg.popular ? "pt-12 md:pt-14" : ""}`}>
                <h3 className="font-serif text-2xl font-semibold text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pkg.duration}</p>

                <div className="mt-6">
                  <span className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
                    €{pkg.price}
                  </span>
                </div>

                <p className="text-muted-foreground mt-4">{pkg.description}</p>

                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full mt-8 py-6 ${
                    pkg.popular
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  <Link href="#contact">Offerte Aanvragen</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Iets anders in gedachten?{" "}
            <Link href="#contact" className="text-foreground underline hover:text-gold transition-colors">
              Neem contact op voor een pakket op maat
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
