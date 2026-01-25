import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl md:text-3xl font-semibold">
                NL<span className="text-gold">eventbox</span>
              </span>
            </Link>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Magazine-stijl photobox verhuur voor bruiloften en grote feesten in heel Nederland. 
              Maak jullie speciale dag onvergetelijk met prachtige herinneringen.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/nleventbox/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Snelle Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#diensten", label: "Onze Diensten" },
                { href: "#hoe-werkt-het", label: "Hoe Werkt Het" },
                { href: "#pakketten", label: "Pakketten" },
                { href: "#reviews", label: "Reviews" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="tel:+31639105393" className="hover:text-gold transition-colors">
                  +31 6 39 10 53 93
                </a>
              </li>
              <li>
                <a href="tel:+31618596206" className="hover:text-gold transition-colors">
                  +31 6 18 59 62 06
                </a>
              </li>
              <li>
                <a href="mailto:info@nleventbox.nl" className="hover:text-gold transition-colors">
                  info@nleventbox.nl
                </a>
              </li>
              <li>Werkgebied: Heel Nederland</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} NL Eventbox. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacybeleid
            </Link>
            <Link href="/voorwaarden" className="hover:text-gold transition-colors">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
