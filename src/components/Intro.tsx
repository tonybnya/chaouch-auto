import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ChaouchIntroductionProps {
  name?: string;
  photo?: string;
  bio?: string;
  yearsInBusiness?: number;
  vehiclesSold?: number;
  additionalStats?: Array<{ label: string; value: string | number }>;
}

const Intro: React.FC<ChaouchIntroductionProps> = ({
  name = "Arouna Chaouch",
  // photo = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  photo = "/chaouch.jpeg",
  bio = "Avec plus de 5 années d'expérience dans la vente de véhicules, je consacre la majeure partie de mon temps à aider les clients à trouver le véhicule idéal. Ma passion pour les voitures et mon engagement à offrir un service honnête ont fait de moi, un label, un nom, une personne de confiance dans ce business.",
  yearsInBusiness = 5,
  vehiclesSold = 100,
  additionalStats = [
    { label: "Satisfaction Clients", value: "85%" },
    { label: "Clientèle fidèle", value: "75%" },
  ],
}) => {
  return (
    <section className="w-full py-16 bg-[#09090b] text-white border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo Column */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">
              Présentation d'<span className="text-[#ec6d51]">{name}</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 text-justify">{bio}</p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-primary/10">
                <CardHeader>
                  <CardTitle className="text-center text-[#ec6d51]">
                    {yearsInBusiness}+
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center font-medium">Années d'activité</p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10">
                <CardHeader>
                  <CardTitle className="text-center text-[#ec6d51]">
                    {vehiclesSold.toLocaleString()}+
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center font-medium">Véhicules Vendus</p>
                </CardContent>
              </Card>

              {additionalStats.map((stat, index) => (
                <Card key={index} className="bg-primary/10">
                  <CardHeader>
                    <CardTitle className="text-center text-[#ec6d51]">
                      {stat.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
