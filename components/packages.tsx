import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle, Lightbulb, PartyPopper, Sparkles, Gem, MapPin, Clock, Palette, Diamond } from "lucide-react";

const packages = [
  {
    name: "Pakket 1",
    subtitle: "Standaard",
    icon: PartyPopper,
    price: "500",
    duration: "Max 4 uur",
    description: "Keuze uit wit of zwart frame, inclusief ballonnen. Ideaal voor kleine feesten of korte events.",
    features: [
      "Basis template, nette uitstraling",
    ],
    popular: false,
  },
  {
    name: "Pakket 2",
    subtitle: "Meest populair",
    icon: Sparkles,
    price: "650",
    duration: "Max 5 uur",
    description: "Alles uit Pakket 1, plus persoonlijke tekst of logo op de Magazine Cover Box. Perfect voor wie iets extra's wil.",
    features: [
      "Personalisatie naar thema of stijl",
      "Mogelijk om de titel aan te passen, plus maximaal 2 kleine details zoals naam en datum.",
    ],
    popular: true,
  },
  {
    name: "Pakket 3",
    subtitle: "Op maat",
    icon: Gem,
    price: "850",
    duration: "Hele dag",
    description: "Volledig gepersonaliseerde box, naar wens met alle extra materialen voor de hele avond. Geschikt voor bruiloften, bedrijfsevents of exclusieve feesten.",
    features: [
      "Op maat gemaakt, premium ervaring",
    ],
    popular: false,
  },
];

const extraDecorations = [
  {
    name: "Golden Stanchions met rode touwen",
    price: "50",
  },
  {
    name: "Witte rozen arrangement",
    price: "30",
  },
  {
    name: "Rode loper",
    price: "30",
  },
  {
    name: "Rode rozenblaadjes",
    price: "20",
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
            Kies het pakket dat het beste bij jullie past. Alle prijzen zijn exclusief reiskosten.
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
                  Meest Populair
                </div>
              )}

              <div className={`p-6 md:p-8 ${pkg.popular ? "pt-12 md:pt-14" : ""}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <pkg.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">- {pkg.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
                    €{pkg.price}
                  </span>
                  <span className="text-muted-foreground ml-2">(excl. km)</span>
                </div>

                <p className="text-sm text-muted-foreground mt-2 mb-4">{pkg.duration}</p>

                <p className="text-foreground leading-relaxed mb-6">{pkg.description}</p>

                <div className="space-y-3">
                  <p className="font-semibold text-foreground text-sm">Extra's:</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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

        {/* Important Notes */}
        <div className="mt-12 space-y-4">
          <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-foreground">
                <span className="font-semibold">Reiskosten:</span> €0,35 per kilometer (heen en terug).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
            <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-foreground">
                <span className="font-semibold">Let op:</span> Niets zo jammer als afbouw midden in het feest!
              </p>
            </div>
          </div>
        </div>

        {/* Extra Decorations */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              Tarieven extra decoratie
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraDecorations.map((item) => (
              <div key={item.name} className="bg-card p-6 rounded-xl border border-border text-center">
                <p className="text-foreground font-medium mb-3">{item.name}</p>
                <p className="font-serif text-2xl font-semibold text-foreground">€{item.price},-</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price Factors */}
        <div className="mt-16 md:mt-20 bg-card rounded-2xl p-8 md:p-12 border border-border">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Waar hangt de prijs vanaf?
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Locatie van het event:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  De prijs hangt af van waar jouw event plaatsvindt. We leveren door heel Nederland. Voor locaties buiten onze regio rekenen we een reiskost van €0,35 per kilometer (heen en terug).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Aantal uren:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Hoe langer de photobox actief is op jouw event, hoe meer tijd we reserveren voor setup en opbouw.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Palette className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Personalisatie:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Wil je een ontwerp op maat met jouw logo, kleuren of thema? Dat maakt jouw cover uniek en volledig afgestemd op jouw event.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Diamond className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Extra opties:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Maak het compleet met extra's zoals een rode loper, VIP-paaltjes of bloemstukken.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-secondary rounded-xl">
            <p className="text-foreground leading-relaxed">
              De totale prijs hangt af van jouw wensen, duur, locatie en eventuele personalisatie. Vraag vrijblijvend een offerte aan voor een exacte prijs op maat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
