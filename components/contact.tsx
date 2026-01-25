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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      firstName: String(fd.get("firstName") ?? "").trim(),
      lastName: String(fd.get("lastName") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      date: String(fd.get("date") ?? "").trim(),
      guests: String(fd.get("guests") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let data: unknown = null;
        try {
          data = await res.json();
        } catch {
          // ignore
        }

        if (
          data &&
          typeof data === "object" &&
          "fields" in data &&
          data.fields &&
          typeof (data as any).fields === "object"
        ) {
          setFieldErrors((data as any).fields as Record<string, string>);
          setSubmitError("Controleer de velden en probeer opnieuw.");
        } else {
          setSubmitError("Versturen is mislukt. Probeer het opnieuw.");
        }
        return;
      }

      setIsSubmitted(true);
      form.reset();
      setFieldErrors({});
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch {
      setSubmitError("Versturen is mislukt. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
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
                href="https://wa.me/31639105393"
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
                  <p className="text-sm text-muted-foreground">+31 6 39 10 53 93</p>
                  <p className="text-sm text-muted-foreground">+31 6 18 59 62 06</p>
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
                      name="firstName"
                      placeholder="Jullie voornamen"
                      required
                      className="bg-background"
                    />
                    {fieldErrors.firstName ? (
                      <p className="text-sm text-destructive">{fieldErrors.firstName}</p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Achternaam</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Achternaam"
                      required
                      className="bg-background"
                    />
                    {fieldErrors.lastName ? (
                      <p className="text-sm text-destructive">{fieldErrors.lastName}</p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mailadres</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jullie@email.nl"
                    required
                    className="bg-background"
                  />
                  {fieldErrors.email ? (
                    <p className="text-sm text-destructive">{fieldErrors.email}</p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+31 6 39 10 53 93"
                    className="bg-background"
                  />
                  {fieldErrors.phone ? (
                    <p className="text-sm text-destructive">{fieldErrors.phone}</p>
                  ) : null}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Datum event</Label>
                    <Input id="date" name="date" type="date" required className="bg-background" />
                    {fieldErrors.date ? (
                      <p className="text-sm text-destructive">{fieldErrors.date}</p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Aantal gasten</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min={1}
                      max={5000}
                      placeholder="Bijv. 200"
                      className="bg-background"
                    />
                    {fieldErrors.guests ? (
                      <p className="text-sm text-destructive">{fieldErrors.guests}</p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Vertel ons meer over jullie plannen..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                  {fieldErrors.message ? (
                    <p className="text-sm text-destructive">{fieldErrors.message}</p>
                  ) : null}
                </div>

                {submitError ? (
                  <p className="text-sm text-destructive">{submitError}</p>
                ) : null}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 py-6 disabled:opacity-60"
                >
                  {isSubmitting ? "Versturen..." : "Verstuur Aanvraag"}
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
