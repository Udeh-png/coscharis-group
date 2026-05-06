import { DetailsCtaContextProvider } from "@/contexts/DetailsCtaContext";
import { FeaturedCars } from "@/data";
import { ContactsAndLocations } from "@/sections/motors/ContactsAndLocations";
import { Hero } from "@/sections/motors/details/Hero";
import { SimilarCars } from "@/sections/motors/details/SimilarCars";
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
      <SimilarCars vehicles={FeaturedCars} />
      <ContactsAndLocations />
    </>
  );
}
