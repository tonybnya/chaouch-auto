// CardVehicle.tsx
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const CardVehicle = ({
  brand,
  model,
  year,
  city,
  in_stock,
  images,
  onViewDetails,
}) => {
  return (
    <div className="w-[300px] group relative space-y-4 text-white">
      <figure className="group-hover:opacity-90">
        <img
          src={images[0]}
          alt={`${brand} ${model} ${year}`}
          className="w-full rounded-lg aspect-square"
        />
      </figure>
      <div className="flex justify-between p-2">
        <div>
          <h3 className="text-md font-semibold">
            {brand} {model} {year}
          </h3>
          {in_stock && <p className="text-sm text-[#f6d44c]">Disponible</p>}
        </div>
        <p className="text-sm text-[#ec6d51] font-light">{city}</p>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={onViewDetails}
          className="w-full bg-black text-white transition-all cursor-pointer hover:scale-105 hover:bg-[#ec6d51]"
        >
          <Info className="size-4 me-1" color="#f6d44c" />
          En savoir plus
        </Button>
      </div>
    </div>
  );
};

export default CardVehicle;
