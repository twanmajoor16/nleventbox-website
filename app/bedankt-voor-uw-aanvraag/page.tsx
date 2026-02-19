import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Bedankt voor uw aanvraag | NL Eventbox",
  description: "Uw aanvraag is in goede orde ontvangen. We nemen binnen 24 uur contact met u op.",
};

export default function BedanktPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative min-h-[80vh] flex items-center py-24 md:py-32 overflow-hidden">
        {/* Background -zelfde stijl als homepage */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gold-light/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-light/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 text-gold mb-8">
            <CheckCircle className="w-12 h-12" />
          </div>
          <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
            Aanvraag ontvangen
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Bedankt voor uw aanvraag
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Uw formulier is succesvol verzonden. We hebben uw bericht in goede orde ontvangen en 
            nemen binnen 24 uur contact met u op voor een persoonlijke offerte.
          </p>
          <p className="mt-4 text-muted-foreground">
            Heeft u direct een vraag? Neem gerust contact met ons op via WhatsApp.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 py-6"
            >
              <Link href="/">
                Terug naar home
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background text-base px-8 py-6 bg-transparent"
            >
              <Link href="/#contact">Nog een aanvraag doen</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
