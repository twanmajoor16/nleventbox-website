import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata = {
  title: "Algemene voorwaarden | NL Eventbox",
  description:
    "De algemene voorwaarden van NL Eventbox voor offertes, boekingen en verhuur van de Magazine Cover Box.",
  alternates: { canonical: "/algemene-voorwaarden" },
};

const EMAIL = "info@nleventbox.nl";

function Mail() {
  return (
    <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">
      {EMAIL}
    </a>
  );
}

type Article = { title: string; items: ReactNode[] };

const articles: Article[] = [
  {
    title: "Artikel 1 – Definities",
    items: [
      <>
        <strong className="text-foreground">NL Eventbox:</strong> NL Eventbox is een handelsnaam
        van PPC&apos;tje (eenmanszaak), gevestigd te Trompstraat 15, 2231 RE Rijnsburg
        (Zuid-Holland), ingeschreven bij de KvK onder nummer 72117486, btw-nummer NL002339232B59.
        Website: www.nleventbox.nl, e-mail: <Mail />, telefoon / WhatsApp:{" "}
        <a href="tel:+31639105393" className="hover:text-gold">
          +31 6 39 10 53 93
        </a>{" "}
        /{" "}
        <a href="tel:+31618596206" className="hover:text-gold">
          +31 6 18 59 62 06
        </a>
        .
      </>,
      <>
        <strong className="text-foreground">Huurder:</strong> de natuurlijke persoon of
        rechtspersoon die een offerte aanvraagt of een overeenkomst sluit met NL Eventbox.
      </>,
      <>
        <strong className="text-foreground">Consument:</strong> een huurder die niet handelt in de
        uitoefening van een beroep of bedrijf.
      </>,
      <>
        <strong className="text-foreground">Photobox:</strong> de Magazine Cover Box (frame van
        circa 2 x 2 meter) inclusief styling, props, achtergronden en eventuele extra decoratie.
      </>,
      <>
        <strong className="text-foreground">Event:</strong> de bijeenkomst waarvoor de photobox
        wordt gehuurd, zoals een bruiloft, verjaardag, babyshower of zakelijk event.
      </>,
      <>
        <strong className="text-foreground">Huurperiode:</strong> het aantal uren dat de photobox
        op het event beschikbaar is, zoals vastgelegd in de bevestiging.
      </>,
    ],
  },
  {
    title: "Artikel 2 – Toepasselijkheid",
    items: [
      "Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van NL Eventbox.",
      "Afwijkingen gelden alleen als NL Eventbox die schriftelijk (ook per e-mail of WhatsApp) heeft bevestigd.",
      "Algemene voorwaarden van de huurder zijn niet van toepassing.",
      "Is een bepaling nietig of vernietigbaar, dan blijven de overige bepalingen gelden. Partijen vervangen die bepaling dan door een bepaling die het oorspronkelijke doel zo dicht mogelijk benadert.",
    ],
  },
  {
    title: "Artikel 3 – Offertes en totstandkoming",
    items: [
      "Alle offertes zijn vrijblijvend en 14 dagen geldig, tenzij anders vermeld.",
      "De overeenkomst komt tot stand zodra de huurder de offerte mondeling of schriftelijk (ook per e-mail of WhatsApp) aanvaardt.",
      "Het betalen van de aanbetaling geldt in elk geval als definitieve aanvaarding door de huurder van de offerte, de gemaakte afspraken en deze algemene voorwaarden, ook als de huurder daarnaast geen afzonderlijk akkoord heeft gegeven.",
      "NL Eventbox stelt deze voorwaarden vóór of bij het sluiten van de overeenkomst beschikbaar, door ze mee te sturen met de offerte of ernaar te verwijzen op de website.",
      "De datum is pas gereserveerd als de aanbetaling is ontvangen. NL Eventbox stuurt daarna een bevestiging met datum, locatie, huurperiode, pakket, extra's en totaalprijs.",
      "Kennelijke fouten of vergissingen in een offerte of op de website binden NL Eventbox niet.",
    ],
  },
  {
    title: "Artikel 4 – Prijzen en betaling",
    items: [
      "Alle prijzen in offertes en op de website zijn in euro's en exclusief 21% btw, tenzij anders vermeld. Voor consumenten vermeldt de offerte ook de totaalprijs inclusief btw.",
      "De actuele pakketprijzen staan op www.nleventbox.nl. Pakket 1 (Standaard) is er vanaf €399. Pakket 2 (Op maat) wordt per offerte geprijsd. De totaalprijs hangt af van locatie, aantal uren, personalisatie en extra opties.",
      "Extra decoratie kost: golden stanchions met rode touwen €50, witte rozen arrangement €30, rode loper €30, rode rozenblaadjes €20. Ballonnen op aanvraag. De tarieven op de website of in de offerte gaan voor.",
      "Reiskosten bedragen €0,35 per kilometer (heen en terug), gerekend vanaf de vestigingslocatie van NL Eventbox. Deze komen bovenop de pakketprijs.",
      "Kosten voor parkeren, tol of ander vervoer die nodig zijn om de locatie te bereiken, worden doorberekend als ze vooraf in de offerte zijn genoemd.",
      "Bij de boeking betaalt de huurder een aanbetaling van 25% van de totaalprijs, berekend over het bedrag exclusief btw.",
      "Het restbedrag en eventuele extra kosten, zoals extra uren of wachttijd, factureert NL Eventbox na het event. De huurder betaalt deze factuur uiterlijk 7 dagen na het event.",
      "Betalingen gaan naar rekeningnummer NL07 KNAB 0776 3470 39 ten name van PPC'tje, onder vermelding van het factuurnummer.",
      "Bij te late betaling is een zakelijke huurder de wettelijke handelsrente verschuldigd en een consument de wettelijke rente, na een kosteloze aanmaning met een betaaltermijn van 14 dagen. Incassokosten worden berekend volgens de wettelijke staffel.",
    ],
  },
  {
    title: "Artikel 5 – Levering, opbouw en afbouw",
    items: [
      "NL Eventbox levert in heel Nederland en, na overleg, in België.",
      "NL Eventbox bouwt de photobox vóór de start van de huurperiode op, geeft uitleg en bouwt na afloop weer af. Opbouw- en afbouwtijd vallen niet onder de huurperiode.",
      <>
        De huurder zorgt voor een geschikte locatie. Dat betekent in elk geval:
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>een veilige, vlakke, droge en overdekte plek zonder risico op schade aan de photobox;</li>
          <li>
            genoeg ruimte om de photobox te plaatsen én voldoende vrije ruimte ervoor om goede
            foto&apos;s te maken;
          </li>
          <li>voldoende licht en een rustige achtergrond rond de box;</li>
          <li>
            een stopcontact (230V) in de buurt van de opstelplek, als dat voor verlichting nodig
            is;
          </li>
          <li>toegang tot de locatie en, waar nodig, toestemming van de locatie-eigenaar;</li>
          <li>een bereikbare los- en laadplek en parkeermogelijkheid.</li>
        </ul>
      </>,
      "Schade aan de photobox die ontstaat doordat de locatie niet aan lid 3 voldoet, komt voor rekening van de huurder. Hetzelfde geldt voor een mindere fotokwaliteit door onvoldoende ruimte, licht of een ongeschikte opstelling. Dit geeft geen recht op korting of terugbetaling.",
      "Vindt NL Eventbox de locatie bij aankomst onveilig of ongeschikt, dan meldt het dit direct aan de huurder en zoekt het samen naar een andere plek. Is er geen veilige oplossing, dan mag NL Eventbox de opbouw weigeren of aanpassen. De volledige prijs blijft dan verschuldigd.",
      "De huurder geeft uiterlijk 5 werkdagen vóór het event het juiste adres, de opbouwtijd en een contactpersoon op locatie door.",
      "Is opbouw door oorzaken aan de kant van de huurder of de locatie niet of later mogelijk, dan blijft de volledige prijs verschuldigd. Wachttijd van meer dan 30 minuten kan worden doorberekend tegen €100 exclusief btw per uur.",
      "NL Eventbox doet er alles aan om op tijd te zijn. Vertraging door verkeer of andere onvoorziene omstandigheden geeft geen recht op ontbinding; de huurperiode schuift in overleg op waar mogelijk.",
    ],
  },
  {
    title: "Artikel 6 – Gebruik van de photobox",
    items: [
      "Gasten maken de foto's zelf met hun eigen telefoon. NL Eventbox levert geen printer, fotograaf of camera, tenzij schriftelijk anders afgesproken.",
      "De huurperiode is 3, 4 of 5 uur of een hele avond, zoals in de bevestiging staat. Verlenging op de dag zelf kan alleen in overleg en als de planning het toelaat, tegen €100 exclusief btw per extra uur.",
      "De photobox blijft eigendom van NL Eventbox. De huurder mag de photobox niet verplaatsen, aanpassen, onderverhuren of aan derden meegeven.",
      "Bij Pakket 1 (Standaard) zijn alleen naam en datum op de box aan te passen. Bij Pakket 2 (Op maat) is het ontwerp volledig te personaliseren.",
      <>
        <strong className="text-foreground">Bestanden en ontwerp.</strong> De huurder is zelf
        verantwoordelijk voor het tijdig en correct aanleveren van alle teksten, namen, data,
        logo&apos;s, afbeeldingen en andere bestanden, bijvoorbeeld voor bestickering of het
        ontwerp van de box. Aanleveren gebeurt uiterlijk 5 werkdagen vóór het event, in het
        formaat en de kwaliteit die NL Eventbox opgeeft.
      </>,
      "NL Eventbox stuurt bij een ontwerp op maat een proef ter controle. De huurder controleert die proef zorgvuldig op onder meer spelling, data, namen en kleuren. Met het akkoord op de proef wordt het ontwerp definitief.",
      "NL Eventbox is niet aansprakelijk voor fouten, onvolkomenheden of een lage beeldkwaliteit die voortkomen uit door de huurder aangeleverde bestanden of gegevens, of die in een door de huurder goedgekeurde proef stonden. Kleine kleurverschillen tussen scherm en drukwerk of bestickering zijn mogelijk en gelden niet als gebrek.",
      "Levert de huurder niet op tijd of niet bruikbaar aan, dan mag NL Eventbox het standaardontwerp gebruiken, of extra kosten rekenen voor spoedwerk of aanpassingen. Wijzigingen na akkoord op de proef zijn alleen mogelijk tegen meerprijs.",
    ],
  },
  {
    title: "Artikel 7 – Verplichtingen van de huurder",
    items: [
      "De huurder gaat zorgvuldig om met de photobox en ziet erop toe dat gasten dat ook doen.",
      "Het is niet toegestaan om op of tegen het frame te leunen, te klimmen of drank en eten in of op de photobox te zetten.",
      "Bij buitenlocaties zorgt de huurder voor beschutting tegen regen en wind. Bij onveilige weersomstandigheden mag NL Eventbox de photobox (tijdelijk) afbouwen zonder recht op restitutie.",
      "Schade, storingen of verlies meldt de huurder direct aan NL Eventbox.",
    ],
  },
  {
    title: "Artikel 8 – Annulering door de huurder",
    items: [
      "Annuleren kan alleen schriftelijk (e-mail of WhatsApp). De datum van ontvangst telt.",
      "Bij annulering, op welk moment ook, wordt de aanbetaling niet terugbetaald. Met de aanbetaling reserveert NL Eventbox de datum, wijst het andere aanvragen af en maakt het al marketing-, voorbereidings- en ontwerpkosten.",
      "Het restbedrag is bij annulering niet verschuldigd. Is NL Eventbox op het moment van annuleren al vertrokken naar de locatie, dan betaalt de huurder ook de reiskosten.",
      "Het wettelijk herroepingsrecht (bedenktijd van 14 dagen) geldt niet, omdat het gaat om een dienst voor vrijetijdsbesteding op een vaste datum (artikel 6:230p onder e BW).",
    ],
  },
  {
    title: "Artikel 9 – Wijzigingen en verplaatsen",
    items: [
      "Wijzigingen in huurperiode, locatie of extra's geeft de huurder zo snel mogelijk door. NL Eventbox past de prijs daarop aan.",
      "Verplaatsen naar een andere datum is eenmalig kosteloos mogelijk tot 30 dagen vóór het event, als NL Eventbox op de nieuwe datum beschikbaar is. De aanbetaling gaat dan mee naar de nieuwe datum.",
    ],
  },
  {
    title: "Artikel 10 – Schade en verlies",
    items: [
      "De huurder is vanaf de oplevering tot de afbouw aansprakelijk voor schade aan of verlies van de photobox, props en decoratie, ook als die door gasten is veroorzaakt.",
      "Normale slijtage komt voor rekening van NL Eventbox.",
      "Schade wordt vergoed tegen de reparatiekosten of, als reparatie niet mogelijk is, de vervangingswaarde. NL Eventbox stuurt hiervan een specificatie.",
    ],
  },
  {
    title: "Artikel 11 – Aansprakelijkheid van NL Eventbox",
    items: [
      "NL Eventbox is alleen aansprakelijk voor directe schade die het gevolg is van een toerekenbare tekortkoming.",
      "De aansprakelijkheid is beperkt tot het bedrag dat de huurder voor de betreffende opdracht heeft betaald, of tot het bedrag dat de verzekering van NL Eventbox uitkeert.",
      "NL Eventbox is niet aansprakelijk voor indirecte schade, zoals gevolgschade, gederfde winst of emotionele schade.",
      "NL Eventbox is niet aansprakelijk voor (de kwaliteit van) foto's die gasten met hun eigen telefoon maken, of voor schade aan of verlies van telefoons en andere eigendommen van gasten.",
      "NL Eventbox is niet aansprakelijk voor fouten in aangeleverde bestanden en ontwerpen (artikel 6) en voor schade of mindere fotokwaliteit door een ongeschikte locatie (artikel 5).",
      <>
        <strong className="text-foreground">Verwachtingen.</strong> De overeenkomst omvat alleen
        wat in de offerte, de bevestiging en deze voorwaarden staat, of wat verder vooraf
        schriftelijk (ook per e-mail of WhatsApp) is afgesproken. NL Eventbox is niet aansprakelijk
        als wensen of verwachtingen die niet vooraf schriftelijk zijn vastgelegd, bijvoorbeeld over
        sfeer, styling, opstelling of het resultaat van de foto&apos;s, niet worden waargemaakt.
        Foto&apos;s en voorbeelden op de website en social media zijn ter indicatie.
      </>,
      "Gasten gebruiken de photobox op eigen risico. De huurder vrijwaart NL Eventbox voor aanspraken van gasten, tenzij de schade het gevolg is van opzet of bewuste roekeloosheid van NL Eventbox.",
      "De beperkingen in dit artikel gelden niet bij opzet of bewuste roekeloosheid van NL Eventbox, en niet voor zover dwingend consumentenrecht anders bepaalt.",
    ],
  },
  {
    title: "Artikel 12 – Overmacht",
    items: [
      "Bij overmacht hoeft NL Eventbox de overeenkomst niet na te komen. Onder overmacht vallen onder meer ziekte van medewerkers, extreme weersomstandigheden, verkeersstremmingen, pech onderweg en overheidsmaatregelen.",
      "NL Eventbox zoekt bij overmacht eerst naar een vervangende oplossing of een nieuwe datum.",
      "Lukt dat niet, dan kunnen beide partijen de overeenkomst ontbinden. NL Eventbox betaalt dan al betaalde bedragen terug, minus aantoonbaar gemaakte kosten voor een ontwerp op maat.",
    ],
  },
  {
    title: "Artikel 13 – Beeldmateriaal en intellectueel eigendom",
    items: [
      "Ontwerpen, templates en de vormgeving van de photobox blijven eigendom van NL Eventbox. De huurder mag deze niet kopiëren of laten namaken.",
      "De huurder staat ervoor in dat aangeleverde logo's, teksten en afbeeldingen geen rechten van anderen schenden.",
      "NL Eventbox mag foto's van de opgebouwde photobox (zonder herkenbare gasten) gebruiken voor eigen promotie. Foto's waarop gasten herkenbaar zijn, gebruikt NL Eventbox alleen met toestemming van de huurder en de betrokken personen.",
      <>
        Op de verwerking van persoonsgegevens is de{" "}
        <Link href="/privacyverklaring" className="text-gold hover:underline">
          Privacyverklaring
        </Link>{" "}
        van NL Eventbox van toepassing.
      </>,
    ],
  },
  {
    title: "Artikel 14 – Klachten",
    items: [
      <>
        Klachten over de uitvoering meldt de huurder zo snel mogelijk, bij voorkeur nog tijdens het
        event, en uiterlijk binnen 7 dagen na het event via <Mail />.
      </>,
      "NL Eventbox reageert binnen 14 dagen inhoudelijk op een klacht.",
      "Een klacht schort de betalingsverplichting niet op.",
    ],
  },
  {
    title: "Artikel 15 – Toepasselijk recht en geschillen",
    items: [
      "Op alle overeenkomsten is Nederlands recht van toepassing.",
      "Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar NL Eventbox is gevestigd (rechtbank Den Haag). Een consument mag binnen een maand nadat NL Eventbox zich hierop beroept, kiezen voor de wettelijk bevoegde rechter.",
      "NL Eventbox mag deze voorwaarden wijzigen. Voor een al gesloten overeenkomst geldt de versie die gold op het moment van boeken.",
    ],
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40">
        <p className="text-sm md:text-base font-medium text-gold uppercase tracking-widest mb-4">
          Voorwaarden
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
          Algemene voorwaarden
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Versie: 19 november 2026</p>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Deze voorwaarden gelden voor elke offerte, boeking en verhuur van de Magazine Cover Box
          door NL Eventbox.
        </p>

        {articles.map((article) => (
          <section key={article.title} className="mt-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              {article.title}
            </h2>
            <ol className="mt-4 list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed marker:text-foreground">
              {article.items.map((item, i) => (
                <li key={i} className="pl-1">
                  {item}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </article>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
