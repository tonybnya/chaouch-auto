import logo from "/logo.png";
import { Mail, MapPin, Smartphone } from "lucide-react";

// TODO: center the footer

const Footer = () => {
  return (
    <footer className="bg-[#09090b] text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt="logo" className="h-30 w-80" />
            <p className="text-gray-400">
              Des véhicules d'occasion et de très bonne qualité à des prix
              compétitifs. Votre partenaire de confiance pour trouver la voiture
              idéale.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/catalogue"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Catalogue
                </a>
              </li>
              <li>
                <a
                  href="/a-propos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Nos contacts</h3>
            <address className="not-italic text-gray-400">
              <div className="flex gap-2 items-center">
                <MapPin className="text-[#ec6d51]" />
                <div>
                  <p>Logpom, Hôpital des Soeurs</p>
                  <p>Douala, Cameroun</p>
                </div>
              </div>
              <p className="mt-2 flex gap-2 items-center">
                <Smartphone className="text-[#ec6d51]" />
                <span>(+237) 690 31 00 24</span>
              </p>
              <p className="mt-2">
                <a
                  aria-label="Chat on WhatsApp"
                  href="https://wa.me/237690310024"
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <img
                    alt="Discuter sur WhatsApp"
                    src="/whatsapp.svg"
                    className="h-6 w-6"
                  />
                  <span className="underline">Ecrivez-nous sur WhatsApp</span>
                </a>
              </p>
              <p className="mt-2 flex gap-2 items-center">
                <Mail className="text-[#ec6d51]" />
                <a href="mailto:arounachaouch@gmail.com" className="underline">
                  arounachaouch@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Chaouch Auto. Tous droits
            réservés.
          </p>
          <p>
            Développé par{" "}
            <a
              href="https://linkedin.com/in/tonybnya"
              target="_blank"
              className="underline font-bold text-white"
            >
              tonybnya
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
