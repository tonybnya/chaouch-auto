import logo from "/logo.png";

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
              <p>123 Auto Drive</p>
              <p>Car City, ST 12345</p>
              <p className="mt-2">Téléphone: (+237) 690 31 00 24</p>
              {/* TODO: WhatsApp link */}
              {/* TODO: email clickable and open the default mail app */}
              <p>Email: chaouch-auto@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Chaouch Auto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
