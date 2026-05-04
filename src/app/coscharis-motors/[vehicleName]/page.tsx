import { DetailsCtaContextProvider } from "@/contexts/DetailsCtaContext";
import { FeaturedCars } from "@/data";
import { Hero } from "@/sections/motors/details/Hero";
import { SpecsAndTestDriveForm } from "@/sections/motors/details/Specs&TestDriveForm";

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
  return (
    <>
      <DetailsCtaContextProvider>
        <Hero vehicleDetails={vehicleDetails || FeaturedCars[0]} />
        <SpecsAndTestDriveForm vehicle={vehicleDetails || FeaturedCars[0]} />
      </DetailsCtaContextProvider>
    </>
  );
}
