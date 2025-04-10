import { useEffect, useRef } from "react";

const APropos = () => {
  const yearsInBusiness = 5;
  const vehiclesSold = 100;
  const additionalStats = [
    { label: "Satisfaction Clients", value: "85%" },
    { label: "Clientèle fidèle", value: "75%" },
  ];

  const animateCount = (ref, endValue, duration = 1500) => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / endValue), 10);
    const increment = () => {
      start++;
      if (ref.current) {
        ref.current.textContent = `${start}+`;
      }
      if (start < endValue) {
        setTimeout(increment, stepTime);
      }
    };
    increment();
  };

  const yearsRef = useRef(null);
  const vehiclesRef = useRef(null);

  useEffect(() => {
    animateCount(yearsRef, yearsInBusiness);
    animateCount(vehiclesRef, vehiclesSold);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-white py-32 px-6 lg:px-32">
      <style>
        {`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1s ease forwards;
        }

        .fade-delay-1 { animation-delay: 0.2s; }
        .fade-delay-2 { animation-delay: 0.4s; }
        .fade-delay-3 { animation-delay: 0.6s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(236, 109, 81, 0.3);
        }
      `}
      </style>

      {/* Titre */}
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-6 text-[#ec6d51] fade-up fade-delay-1">
          À propos de nous
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify tracking-tight fade-up fade-delay-2">
          Nous sommes passionnés par l'automobile et motivés par l'idée de vous
          offrir une expérience d'achat de véhicules simple, transparente et
          sécurisée. Depuis le début, notre mission est de connecter les
          particuliers et les professionnels à des véhicules de qualité,
          soigneusement sélectionnés et inspectés.
        </p>
      </div>

      {/* Vision / Valeurs */}
      <div className="grid md:grid-cols-2 gap-10 mb-12 p-6">
        <div className="fade-up fade-delay-1">
          <h2 className="text-2xl font-semibold text-[#ec6d51] mb-2">
            Notre Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed text-justify tracking-tight">
            Devenir un acteur incontournable de la vente de véhicules sur le
            marché local et international, en misant sur la technologie,
            l'humain et la confiance.
          </p>
        </div>
        <div className="fade-up fade-delay-2">
          <h2 className="text-2xl font-semibold text-[#ec6d51] mb-2">
            Nos Valeurs
          </h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Transparence et intégrité</li>
            <li>Respect des engagements</li>
            <li>Service client réactif</li>
            <li>Innovation continue</li>
          </ul>
        </div>
      </div>

      {/* Statistiques */}
      <div className="px-6 fade-up fade-delay-3">
        <h2 className="text-2xl font-semibold text-[#ec6d51] mb-6">
          Nos chiffres clés
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center card-hover">
            <h3
              ref={yearsRef}
              className="text-4xl font-bold text-[#ec6d51] mb-2"
            >
              0+
            </h3>
            <p className="font-medium text-muted-foreground">
              Années d'activité
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center card-hover">
            <h3
              ref={vehiclesRef}
              className="text-4xl font-bold text-[#ec6d51] mb-2"
            >
              0+
            </h3>
            <p className="font-medium text-muted-foreground">
              Véhicules vendus
            </p>
          </div>

          {additionalStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-center card-hover"
            >
              <h3 className="text-4xl font-bold text-[#ec6d51] mb-2">
                {stat.value}
              </h3>
              <p className="font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Équipe */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-20 mx-6 fade-up fade-delay-2">
        <h2 className="text-2xl font-semibold text-[#ec6d51] mb-4">
          Notre Équipe
        </h2>
        <p className="text-muted-foreground leading-relaxed text-justify tracking-tight">
          Derrière chaque véhicule que nous proposons, il y a une équipe soudée
          composée de techniciens, de commerciaux, de passionnés d'automobile.
          Ensemble, nous travaillons à vous offrir un service irréprochable, du
          choix du véhicule à la livraison. Sous l'impulsion de son promoteur,{" "}
          <span className="font-bold text-[#f6d44c]">
            NSANGOU NJIMOLUH Arouna Chaouch
          </span>
          , jeune entrepreneur basé à Douala,{" "}
          <span className="text-[#ec6d51] font-bold">Chaouch Auto</span>{" "}
          s'illustre depuis plusieurs années dans ce domaine avec force, ayant
          pour seul objectif la pleine satisfaction de ses clients.
        </p>
      </div>
    </div>
  );
};

export default APropos;
