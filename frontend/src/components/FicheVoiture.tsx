import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WhatsApp from "@/components/WhatsApp";
import Feature from "@/components/Feature";

const FicheVoiture = ({
  brand,
  model,
  year,
  city,
  in_stock,
  desc,
  origin,
  transmission,
  km,
  clim,
  volant,
  engine,
  color,
  doors,
  seats,
  power,
  sellery,
  images = [],
}) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrent(index);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-white">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Slider */}
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
          <h1 className="text-2xl font-bold">{`${brand} ${model} ${year}`}</h1>
          <p className="text-muted-foreground">
            {in_stock && <span className="text-[#f6d44c]">Disponible</span>}{" "}
            <span className="text-[#ec6d51]">•</span> <span>{city}</span>
          </p>
          <div className="w-[90%]">
            <WhatsApp />
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2 text-[#ec6d51]">
              État général
            </h2>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        </div>
      </div>

      {/* Caractéristiques */}
      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-[#ec6d51]">
          Caractéristiques
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <Feature label="Origine" value={origin} />
          <Feature label="Disponible à" value={city} />
          <Feature label="Transmission" value={transmission} />
          <Feature label="Marque" value={brand} />
          <Feature label="Modèle" value={model} />
          <Feature label="Année" value={year} />
          <Feature label="Kilométrage" value={`${km} km`} />
          <Feature label="Climatisation" value={clim} />
          <Feature label="Volant" value={volant} />
          <Feature label="Moteur" value={engine} />
          <Feature label="Couleur" value={color} />
          <Feature label="Portes" value={doors} />
          <Feature label="Sièges" value={seats} />
          <Feature label="Puissance" value={power} />
          <Feature label="Sellerie" value={sellery} />
        </div>
      </div>
    </div>
  );
};

export default FicheVoiture;
