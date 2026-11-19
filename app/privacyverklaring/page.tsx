import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata = {
  title: "Privacyverklaring | NL Eventbox",
  description:
    "Lees hoe NL Eventbox omgaat met je persoonsgegevens: welke gegevens we verwerken, waarom, hoe lang we ze bewaren en welke rechten je hebt.",
  alternates: { canonical: "/privacyverklaring" },
};

const EMAIL = "info@nleventbox.nl";

function Mail() {
  return (
    <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">
      {EMAIL}
    </a>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm text-left">
        <thead className="bg-muted/50 text-foreground">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyverklaringPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40">
        <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
          Privacy
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
          Privacyverklaring
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Versie: 19 november 2026</p>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          NL Eventbox gaat zorgvuldig om met je gegevens en gebruikt ze alleen om je aanvraag en je
          boeking af te handelen.
        </p>

        <Section title="Wie zijn wij">
          <p>
            PPC&apos;tje, handelend onder de naam NL Eventbox, is verantwoordelijk voor de verwerking
            van persoonsgegevens zoals beschreven in deze privacyverklaring.
          </p>
          <dl className="grid sm:grid-cols-[max-content_1fr] gap-x-6 gap-y-2">
            <dt className="font-medium text-foreground">Naam</dt>
            <dd>NL Eventbox, een handelsnaam van PPC&apos;tje (eenmanszaak)</dd>
            <dt className="font-medium text-foreground">Adres</dt>
            <dd>Trompstraat 15, 2231 RE Rijnsburg (Zuid-Holland)</dd>
            <dt className="font-medium text-foreground">KvK-nummer</dt>
            <dd>72117486 (PPC&apos;tje)</dd>
            <dt className="font-medium text-foreground">Btw-nummer</dt>
            <dd>NL002339232B59</dd>
            <dt className="font-medium text-foreground">Website</dt>
            <dd>www.nleventbox.nl</dd>
            <dt className="font-medium text-foreground">E-mail</dt>
            <dd>
              <Mail />
            </dd>
            <dt className="font-medium text-foreground">Telefoon / WhatsApp</dt>
            <dd>
              <a href="tel:+31639105393" className="hover:text-gold">
                +31 6 39 10 53 93
              </a>{" "}
              of{" "}
              <a href="tel:+31618596206" className="hover:text-gold">
                +31 6 18 59 62 06
              </a>
            </dd>
            <dt className="font-medium text-foreground">Werkgebied</dt>
            <dd>Heel Nederland en België</dd>
          </dl>
          <p>
            Vragen over privacy kun je stellen via <Mail />.
          </p>
        </Section>

        <Section title="Welke gegevens we verwerken en waarom">
          <p>
            We verwerken alleen gegevens die je zelf aan ons geeft via het offerteformulier, e-mail,
            telefoon of WhatsApp.
          </p>
          <Table
            head={["Gegevens", "Doel", "Grondslag (AVG)"]}
            rows={[
              [
                "Voor- en achternaam, e-mailadres, telefoonnummer",
                "Contact opnemen en binnen 24 uur een offerte sturen",
                "Voorbereiden van een overeenkomst (art. 6 lid 1 sub b)",
              ],
              [
                "Type event (zakelijk event, bruiloft, verjaardag, babyshower, overig), datum, starttijd, aantal uur, adres, huisnummer, provincie, gekozen extra decoratie, bericht",
                "Offerte en planning opstellen, reiskosten berekenen, leveren en opbouwen",
                "Voorbereiden en uitvoeren van een overeenkomst (sub b)",
              ],
              [
                "Aangeleverde namen, data, logo's en teksten voor de box",
                "Ontwerp op maat maken",
                "Uitvoeren van een overeenkomst (sub b)",
              ],
              [
                "Factuur- en betaalgegevens (naam, adres, IBAN, bedrijfsgegevens)",
                "Aanbetaling en restbedrag verwerken, administratie",
                "Uitvoeren van een overeenkomst (sub b) en wettelijke plicht (sub c)",
              ],
              [
                "WhatsApp- en e-mailgesprekken",
                "Vragen beantwoorden en afspraken vastleggen",
                "Uitvoeren van een overeenkomst (sub b)",
              ],
              [
                "Technische gegevens (IP-adres, browser, apparaat)",
                "Website laten werken en beveiligen",
                "Gerechtvaardigd belang (sub f)",
              ],
              [
                "Websitegebruik en cookie-ID's via Google Analytics, Vercel Web Analytics en Meta Pixel",
                "Bezoek meten en advertenties op Facebook en Instagram verbeteren",
                "Toestemming (sub a)",
              ],
            ]}
          />
          <p>
            We gebruiken je gegevens niet voor nieuwsbrieven of reclame, tenzij je daar apart
            toestemming voor geeft. We nemen geen besluiten op basis van geautomatiseerde verwerking.
          </p>
          <p>
            Onze diensten zijn niet bedoeld voor personen jonger dan 16 jaar. Een offerte aanvragen
            kan alleen als je 16 jaar of ouder bent.
          </p>
        </Section>

        <Section title="Foto's op het event">
          <p>
            Gasten maken de foto&apos;s in de Magazine Cover Box met hun eigen telefoon. NL
            Eventbox verhuurt alleen de box: de foto&apos;s komen niet bij ons terecht en wij slaan
            ze niet op.
          </p>
          <p>
            Wat gasten met hun eigen foto&apos;s doen (bewaren, delen op social media) is hun eigen
            verantwoordelijkheid.
          </p>
          <p>
            NL Eventbox maakt soms foto&apos;s van de opgebouwde box voor eigen promotie op website
            en social media. Gasten zijn daarop niet herkenbaar, tenzij zij en de huurder daar vooraf
            toestemming voor hebben gegeven. Die toestemming kun je altijd intrekken via <Mail />.
          </p>
        </Section>

        <Section title="Hoe lang we gegevens bewaren">
          <Table
            head={["Gegevens", "Bewaartermijn"]}
            rows={[
              ["Offerteaanvraag zonder boeking", "12 maanden na het laatste contactmoment"],
              ["Gegevens van een boeking", "2 jaar na het event"],
              ["Facturen en betaalgegevens", "7 jaar (fiscale bewaarplicht)"],
              [
                "Ontwerpbestanden op maat",
                "1 jaar na het event, tenzij je vraagt ze eerder te verwijderen",
              ],
            ]}
          />
        </Section>

        <Section title="Delen met anderen">
          <p>
            We verkopen je gegevens nooit. We delen ze alleen met partijen die we nodig hebben om
            onze dienst te leveren, en met wie we waar nodig een verwerkersovereenkomst hebben:
          </p>
          <List
            items={[
              "Vercel Inc. – hosting van de website en Vercel Web Analytics;",
              "Google LLC / Google Ireland – Google Tag Manager en Google Analytics;",
              "Meta Platforms Ireland – Meta Pixel (Facebook en Instagram), WhatsApp en Instagram, als je via die kanalen contact opneemt;",
              "bank: Knab; boekhoudpakket: Moneybird;",
              "onze boekhouder, voor de administratie;",
              "instanties zoals de Belastingdienst, als de wet dat verplicht.",
            ]}
          />
          <p>
            Vercel, Google en Meta kunnen gegevens verwerken in de Verenigde Staten. Dit gebeurt op
            basis van het EU-VS Data Privacy Framework of standaardcontractbepalingen van de Europese
            Commissie.
          </p>
        </Section>

        <Section title="Cookies">
          <p>Onze website gebruikt de volgende cookies en vergelijkbare technieken:</p>
          <Table
            head={["Dienst", "Soort", "Doel", "Toestemming nodig"]}
            rows={[
              ["Website (Vercel)", "Functioneel", "Website laten werken", "Nee"],
              [
                "Vercel Web Analytics",
                "Analytisch",
                "Bezoekersaantallen meten, zonder cookies",
                "Nee",
              ],
              [
                "Google Analytics (via Google Tag Manager)",
                "Analytisch",
                "Bezoek en gebruik van de site meten",
                "Ja",
              ],
              [
                "Meta Pixel",
                "Marketing",
                "Advertenties op Facebook en Instagram meten en verbeteren",
                "Ja",
              ],
            ]}
          />
          <p>
            Voor analytische en marketingcookies vragen we vooraf toestemming via de cookiemelding.
            Je kunt je keuze altijd wijzigen of cookies verwijderen via de instellingen van je
            browser.
          </p>
        </Section>

        <Section title="Beveiliging">
          <p>
            We nemen passende maatregelen om je gegevens te beschermen, zoals een beveiligde
            verbinding (HTTPS), sterke wachtwoorden en tweestapsverificatie op onze accounts.
          </p>
          <p>
            Denk je dat je gegevens niet goed beveiligd zijn of misbruikt worden? Neem dan contact op
            via <Mail />.
          </p>
        </Section>

        <Section title="Jouw rechten">
          <p>Je hebt het recht om:</p>
          <List
            items={[
              "je gegevens in te zien;",
              "onjuiste gegevens te laten corrigeren;",
              "je gegevens te laten verwijderen, voor zover we ze niet wettelijk moeten bewaren;",
              "de verwerking te laten beperken of er bezwaar tegen te maken;",
              "je gegevens in een gangbaar bestand te ontvangen (dataportabiliteit);",
              "gegeven toestemming in te trekken.",
            ]}
          />
          <p>
            Stuur je verzoek naar <Mail />. We reageren binnen 4 weken. We kunnen je vragen je
            identiteit te bevestigen; stuur daarvoor nooit een kopie van je paspoort of ID zonder het
            BSN en de pasfoto af te schermen.
          </p>
        </Section>

        <Section title="Klachten">
          <p>
            Ben je niet tevreden over hoe we met je gegevens omgaan? Laat het ons eerst weten, dan
            zoeken we samen naar een oplossing. Je hebt ook altijd het recht een klacht in te dienen
            bij de{" "}
            <a
              href="https://www.autoriteitpersoonsgegevens.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Autoriteit Persoonsgegevens
            </a>
            .
          </p>
        </Section>

        <Section title="Wijzigingen">
          <p>
            We kunnen deze privacyverklaring aanpassen. De meest recente versie staat altijd op onze
            website. Bij belangrijke wijzigingen laten we het je weten als je een lopende boeking
            hebt.
          </p>
        </Section>
      </article>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
