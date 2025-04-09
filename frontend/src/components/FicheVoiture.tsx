import { useState, useEffect, useRef } from "react";
import Feature from "./Feature";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WhatsApp from "./WhatsApp";

const FicheVoiture = () => {
  const images = [
    "/hero-bg.jpg",
    "/hero-bg.jpg",
    "/hero-bg.jpg",
    "/hero-bg.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 4000);
    return () => clearTimeout(timeoutRef.current!);
  }, [current]);

  const handleThumbnailClick = (index: number) => {
    setCurrent(index);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-white">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Slider + miniatures */}
        <div className="space-y-4 relative overflow-hidden rounded-xl">
          <div className="w-full h-80 relative rounded-xl overflow-hidden">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Voiture ${idx}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  idx === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>

          {/* Miniatures */}
          <div className="flex gap-2">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Miniature ${idx}`}
                onClick={() => handleThumbnailClick(idx)}
                className={`h-20 w-24 rounded-lg object-cover cursor-pointer border-2 ${
                  current === idx ? "border-[#ec6d51]" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Infos principales */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold">Toyota Corolla 2020</h1>
            <p className="text-muted-foreground">
              <span className="text-[#f6d44c]">Disponible</span>{" "}
              <span className="text-[#ec6d51]">•</span> <span>Abidjan</span>
            </p>
          </div>
          {/* <p className="text-3xl font-semibold text-primary">6 900 000 FCFA</p> */}
          <div className="w-[75%]">
            <WhatsApp />
          </div>
          {/* Description complète */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2 text-[#ec6d51]">
              État général
            </h2>
            <p className="text-sm text-muted-foreground">
              Véhicule très propre, importé récemment de Belgique. Aucun frais à
              prévoir. Carrosserie intacte, moteur en parfait état, pneus neufs,
              climatisation fonctionnelle. Convient pour un usage familial ou
              professionnel.
            </p>
          </div>
        </div>
      </div>

      {/* Caractéristiques */}
      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-[#ec6d51]">
          Caractéristiques
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <Feature label="Origine" value="Japon" />
          <Feature label="Ville" value="Abidjan" />
          <Feature label="Transmission" value="Automatique" />
          <Feature label="Marque" value="Toyota" />
          <Feature label="Modèle" value="Corolla" />
          <Feature label="Année" value="2020" />
          <Feature label="Kilométrage" value="65 000 km" />
          <Feature label="Climatisation" value="Oui" />
          <Feature label="Volant" value="Droite" />
          <Feature label="Moteur" value="Essence 1.8L" />
          <Feature label="Couleur" value="Gris métal" />
          <Feature label="Portes" value="4" />
          <Feature label="Sièges" value="5" />
          <Feature label="Puissance" value="140 ch" />
          <Feature label="Sellerie" value="Cuir noir" />
        </div>
      </div>
    </div>
  );
};

export default FicheVoiture;
