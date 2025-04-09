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
