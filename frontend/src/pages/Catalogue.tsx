import { useState, useEffect } from "react";
import CardVehicle from "@/components/CardVehicle";
import CatalogueHero from "@/components/CatalogueHero";
import Spinner from "@/components/Spinner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import FicheVoiture from "@/components/FicheVoiture";

const Catalogue = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/vehicles");
        if (!response.ok) throw new Error("Failed to fetch vehicles");

        const data = await response.json();
        setVehicles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const handleOpenModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedVehicle(null);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 font-bold">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#09090b] w-full">
      <CatalogueHero />
      <main className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 space-y-10 max-w-[1400px] mx-auto">
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] justify-items-center">
          {vehicles.map((vehicle) => (
            <CardVehicle
              key={vehicle.id}
              {...vehicle}
              onViewDetails={() => handleOpenModal(vehicle)}
            />
          ))}
        </div>
      </main>

      {/* Modal */}
      <Dialog open={open} onOpenChange={handleCloseModal}>
        {/* <DialogContent className="max-w-32 bg-[#09090b] overflow-y-auto max-h-[90vh]"> */}
        {/* <DialogContent className="w-[95vw] max-w-[1200px] bg-[#09090b] overflow-y-auto max-h-[90vh] p-6 rounded-xl"> */}
        {/* <DialogContent className="w-full max-w-6xl bg-[#09090b] overflow-y-auto max-h-[90vh] p-6 rounded-xl"> */}
        <DialogContent className="w-full max-w-lg lg:max-w-6xl bg-[#09090b] overflow-y-auto max-h-[90vh] p-6 rounded-xl">
          {selectedVehicle && <FicheVoiture {...selectedVehicle} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Catalogue;
