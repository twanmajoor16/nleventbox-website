"use client";

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function InstagramFeed() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
            Volg Ons
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            @NLeventbox op Instagram
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Blijf op de hoogte van onze nieuwste evenementen, tips en inspiratie
          </p>
        </div>

        {/* Instagram Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative aspect-square rounded-xl overflow-hidden bg-muted group cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <Instagram className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                Instagram Post {item}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 py-6"
          >
            <Link
              href="https://instagram.com/nleventbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Volg Ons op Instagram
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
