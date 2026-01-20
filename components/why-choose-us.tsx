import { Heart, Shield, Star, Users } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Ervaring met Grote Evenementen",
    description:
      "Wij hebben ruime ervaring met bruiloften, verjaardagen en feesten van 200+ gasten. Onze setup is bestand tegen drukte.",
  },
  {
    icon: Heart,
    title: "Begrip van Culturele Wensen",
    description:
      "Wij respecteren en begrijpen de tradities en wensen van diverse culturele achtergronden.",
  },
  {
    icon: Shield,
    title: "Betrouwbare Service",
    description:
      "Van tijdige levering tot professionele begeleiding - op ons kun je rekenen.",
  },
  {
    icon: Star,
    title: "Hoogwaardige Kwaliteit",
    description:
      "Magazine-kwaliteit foto's waar jullie gasten nog jaren naar zullen kijken.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video Side - Verticaal iPhone Formaat */}
          <div className="relative order-2 lg:order-1">
            <div className="max-w-md mx-auto">
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-background border border-border">
                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/social-video.mp4" type="video/mp4" />
                  Uw browser ondersteunt de video tag niet.
                </video>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
              Waarom Wij
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Waarom klanten voor ons kiezen
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Al meer dan 8 jaar maken wij bruiloften, verjaardagen en feesten nog specialer met onze photobooths. 
              Wij begrijpen dat jullie dag perfect moet zijn.
            </p>

            <div className="mt-10 space-y-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
