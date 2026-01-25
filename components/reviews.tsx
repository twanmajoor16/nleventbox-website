import { Star } from "lucide-react";

const reviews = [
  {
    name: "Fatima & Ahmed",
    location: "Amsterdam",
    rating: 5,
    text: "De photobox was het hoogtepunt van ons event! Alle gasten waren er enthousiast over. De kwaliteit van de foto's die ze zelf konden maken is geweldig en de setup was super professioneel.",
    date: "November 2025",
  },
  {
    name: "Sara & Mohammed",
    location: "Rotterdam",
    rating: 5,
    text: "Wat een fantastische service! Ze begrijpen precies wat er nodig is voor een groot event. Alles was tot in de puntjes geregeld. Aanrader!",
    date: "Oktober 2025",
  },
  {
    name: "Aisha & Youssef",
    location: "Den Haag",
    rating: 5,
    text: "Wij waren zo blij met de photobox! De props waren stijlvol en passend. Onze gasten hebben zich geweldig vermaakt en de foto's die ze zelf hebben gemaakt zijn prachtige herinneringen.",
    date: "September 2025",
  },
  {
    name: "Nadia & Omar",
    location: "Utrecht",
    rating: 5,
    text: "Heel professioneel team dat goed rekening houdt met onze wensen. De digitale galerij was super handig - alle gasten konden direct hun foto's delen.",
    date: "Augustus 2025",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Wat klanten over ons zeggen
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Wij zijn trots op de vele positieve reacties die wij ontvangen van tevreden klanten.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-xl border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground leading-relaxed text-lg">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
