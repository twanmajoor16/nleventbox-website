"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Moeten we zelf de foto's maken?",
    answer:
      "Ja! Gasten maken zelf hun foto's met hun eigen telefoon. Zo kunnen ze direct poseren, meerdere keren proberen en het resultaat meteen delen.",
  },
  {
    question: "Printen jullie de foto's ook uit?",
    answer:
      "Nee, we hebben bewust gekozen om geen printer toe te voegen. Dat houdt de kosten lager, voorkomt wachtrijen en bespaart ruimte op jouw event. Bovendien kunnen gasten hun foto's digitaal bewaren en direct delen op social media.",
  },
  {
    question: "Hoe groot is de Magazine Cover Box?",
    answer:
      "De box heeft een afmeting van 200 cm breed x 200 cm diep x 230 cm hoog. Dankzij dit ruime formaat is de box perfect geschikt voor individuele foto's én groepsfoto's. Ideaal voor vrienden, families of collega's samen op één cover.",
  },
  {
    question: "Hoe lang mogen we de box gebruiken?",
    answer:
      "Dat hangt af van het gekozen pakket. Je kunt kiezen tussen 3, 4, 5 uurtjes of een hele avond gebruik.",
  },
  {
    question: "Hoe werkt de betaling en aanbetaling?",
    answer:
      "Om jouw plek te reserveren, vragen we een aanbetaling. Let op: mocht het event later geannuleerd worden, dan wordt deze aanbetaling niet terugbetaald. Dit omdat wij al marketingkosten maken, voorbereidingen treffen en vaak andere aanvragen moeten afwijzen om jouw datum vrij te houden.",
  },
  {
    question: "Leveren jullie door heel Nederland?",
    answer:
      "Ja, we leveren overal. We rekenen €0,35 per kilometer (heen en terug) vanaf onze locatie.",
  },
  {
    question: "Kunnen we de box personaliseren?",
    answer:
      "Zeker! Bij het populairste en luxe pakket kun je eigen tekst, logo of thema toevoegen aan de magazine cover.",
  },
  {
    question: "Helpen jullie ook op locatie?",
    answer:
      "Ja, we bouwen alles op en geven duidelijke uitleg. We zetten de photobox op en geven instructies, zodat gasten zelfstandig aan de slag kunnen.",
  },
  {
    question: "Wat als ons event langer duurt dan gepland?",
    answer:
      "Geen probleem. We zijn redelijk en denken graag mee. We kunnen in overleg extra tijd bijboeken.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
            Veelgestelde Vragen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Alles wat je wilt weten
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Heb je nog andere vragen? Neem gerust contact met ons op via het contactformulier of WhatsApp.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
