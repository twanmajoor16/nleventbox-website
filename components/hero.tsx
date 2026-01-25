import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gold-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
              Photobox Verhuur
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight text-balance">
              Maak jullie feest onvergetelijk
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Magazine-stijl photobox verhuur voor bruiloften, verjaardagen en grote feesten. 
              Complete service van A tot Z, zodat jullie kunnen genieten van jullie speciale dag.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 py-6"
              >
                <Link href="#contact">
                  Vraag Offerte Aan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background text-base px-8 py-6 bg-transparent"
              >
                <Link href="#hoe-werkt-het">Bekijk Hoe Het Werkt</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Tevreden Klanten</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">8+</p>
                <p className="text-sm text-muted-foreground">Jaar Ervaring</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl transform rotate-3" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-photobooth.jpg"
                  alt="Elegante photobox setup op een feest"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 md:p-6 rounded-xl shadow-lg border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Nu Boeken</p>
                <p className="font-serif text-xl md:text-2xl font-semibold text-foreground mt-1">2025 & 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
