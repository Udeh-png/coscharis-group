import { VehicleCard } from "@/components/VehicleCard";
import { FeaturedCars } from "@/data";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const FeaturedVehiclesGrid = () => {
  return (
    <section className="px-5 py-10 md:px-10">
      <div>
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/45">
            Featured Collection
          </p>
          <h2 className="mt-4 text-5xl font-black leading-none text-black max-[541px]:text-4xl">
            Explore Our Featured Vehicles
          </h2>
        </div>

        <div className="grid gap-6 max-[990px]:grid-cols-2 max-[670px]:grid-cols-1 grid-cols-3">
          {FeaturedCars.filter((_, i) => i < 5).map((car, i) => (
            <VehicleCard vehicle={car} key={i} />
          ))}
        </div>

        <div className="flex justify-end max-[770px]:justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-transform duration-300 hover:translate-x-1 max-[770px]:mt-3"
          >
            View Full Inventory
            <HiOutlineArrowLongRight className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
};
