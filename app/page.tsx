import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { HowItWorks } from "@/components/how-it-works";
import { Gallery } from "@/components/gallery";
import { Packages } from "@/components/packages";
import { Reviews } from "@/components/reviews";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Gallery />
      <Packages />
      <Reviews />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
