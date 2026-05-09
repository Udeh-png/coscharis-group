import { Vehicle } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const displaySpecs = vehicle.keySpecs.slice(0, 5);
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(Number(vehicle.startingPrice));

  return (
    <Link
      href={`/coscharis-motors/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}`}
      key={vehicle.name}
      className="border border-black/10 bg-white p-6 max-[541px]:p-0 max-[541px]:pb-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 block text-start"
    >
      <div className="relative mb-3 h-56 border border-black/8 bg-linear-to-br from-slate-50 to-white p-4">
        {vehicle.justArrived && (
          <p className="py-1 px-2 text-xs capitalize bg-red-700 text-white tracking-widest font-semibold absolute top-0 right-0 z-10">
            Just arrived
          </p>
        )}
        <Image
          src={vehicle.mainImage}
          alt={vehicle.name}
          fill
          unoptimized
          className="object-contain"
        />
      </div>

      <div className="max-[541px]:px-3">
        <h3 className="text-2xl font-black leading-tight text-black">
          {vehicle.name}
        </h3>

        <p className="font-semibold text-black/65">M 320i</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {displaySpecs.map((spec) => (
            <span
              key={spec}
              className="border border-black/10 bg-black/3 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/65"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-col max-[541px]:items-stretch justify-between gap-4">
          <p className="text-2xl font-black">
            <span className="text-xs uppercase text-black/65 font-semibold tracking-[0.35em] mr-2">
              from
            </span>
            {formattedPrice}
          </p>

          <button className="inline-flex items-center w-fit gap-2 bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-transform duration-300 hover:translate-x-1 max-[541px]:w-fit">
            Book Test Drive
            <HiOutlineArrowLongRight className="text-lg" />
          </button>
        </div>
      </div>
    </Link>
  );
};
