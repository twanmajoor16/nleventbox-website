import { Camera, Truck, Users, ImageIcon, Clock, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Magazine Photobox",
    description:
      "Professionele studio-kwaliteit photobox met magazine-cover stijl. Jullie gasten kunnen zelf prachtige foto's maken die ze nooit zullen vergeten.",
  },
  {
    icon: Truck,
    title: "Levering & Installatie",
    description:
      "Wij zorgen voor de complete opbouw en afbouw. Jullie hoeven nergens aan te denken.",
  },
  {
    icon: Users,
    title: "Setup & Instructies",
    description:
      "Wij zetten de photobox op en geven duidelijke instructies. Jullie gasten kunnen daarna zelfstandig aan de slag.",
  },
  {
    icon: ImageIcon,
    title: "Zelf Foto's Maken",
    description:
      "Gasten kunnen zelf onbeperkt foto's maken met de photobox. Alle foto's kunnen direct worden gedeeld via QR-code.",
  },
  {
    icon: Clock,
    title: "Flexibele Huurtijden",
    description:
      "Van een paar uur tot de hele avond - wij passen ons aan jullie wensen aan.",
  },
  {
    icon: Sparkles,
    title: "Premium Props & Styling",
    description:
      "Elegante props en stijlvolle achtergronden die passen bij jullie thema en kleurenpalet.",
  },
];

export function Services() {
  return (
    <section id="diensten" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
            Wat Verhuren Wij
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Complete photobox ervaring van A tot Z
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Wij nemen alles uit handen zodat jullie kunnen genieten van jullie speciale dag. 
            Van levering tot setup en instructies - alles zit inbegrepen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card p-6 md:p-8 rounded-xl border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
