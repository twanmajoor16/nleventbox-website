"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
              Neem Contact Op
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Klaar om jullie dag onvergetelijk te maken?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Vul het formulier in en ontvang binnen 24 uur een persoonlijke offerte. 
              Of neem direct contact met ons op via WhatsApp.
            </p>

            {/* Contact Methods */}
            <div className="mt-10 space-y-6">
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-gold transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-sm text-muted-foreground">Snel en direct contact</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <p className="text-sm text-muted-foreground">info@nleventbox.nl</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefoon</p>
                  <p className="text-sm text-muted-foreground">+31 6 12 34 56 78</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Werkgebied</p>
                  <p className="text-sm text-muted-foreground">Heel Nederland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 md:p-10 rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Vraag een offerte aan
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Bedankt voor je bericht!
                </h4>
                <p className="text-muted-foreground">
                  Wij nemen binnen 24 uur contact met je op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Voornaam</Label>
                    <Input
                      id="firstName"
                      placeholder="Jullie voornamen"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Achternaam</Label>
                    <Input
                      id="lastName"
                      placeholder="Achternaam"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mailadres</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jullie@email.nl"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+31 6 12 34 56 78"
                    className="bg-background"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Datum bruiloft</Label>
                    <Input id="date" type="date" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Aantal gasten</Label>
                    <Input
                      id="guests"
                      type="number"
                      placeholder="Bijv. 200"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea
                    id="message"
                    placeholder="Vertel ons meer over jullie plannen..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 py-6"
                >
                  Verstuur Aanvraag
                  <Send className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Door te versturen ga je akkoord met onze privacyvoorwaarden.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
