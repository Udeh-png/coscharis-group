import { FeaturedCars } from "@/data";
import { Hero } from "@/sections/motors/details/Hero";

export default async function VehiclePage({
  params,
}: {
  params: Promise<{ vehicleName: string }>;
}) {
  const { vehicleName } = await params;
  const vehicleNameFormatted = vehicleName.replace(/-/g, " ").toLowerCase();
  const vehicleDetails = FeaturedCars.find(
    (car) => car.name.toLowerCase() === vehicleNameFormatted,
  );
  return <Hero vehicleDetails={vehicleDetails || FeaturedCars[0]} />;
}
