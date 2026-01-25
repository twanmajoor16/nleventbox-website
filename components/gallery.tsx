import Image from "next/image";

const galleryImages = [
  {
    src: "/images/IMG_2782.jpg",
    alt: "Magazine-stijl photobox",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/IMG_4401.jpg",
    alt: "Photobox ervaring",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/IMG_3419.jpg",
    alt: "Photobox setup",
    span: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
            Onze Portfolio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Momenten die gasten hebben vastgelegd
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Een kleine selectie van de prachtige foto's die gasten hebben gemaakt tijdens bruiloften, verjaardagen en feesten waar onze photobox onderdeel van was.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={1000}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
