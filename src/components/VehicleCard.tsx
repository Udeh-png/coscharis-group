import { Vehicle } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const displaySpecs = vehicle.keySpecs.slice(0, 3);
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    notation: "compact",
  }).format(Number(vehicle.startingPrice));

  return (
    <Link
      href={`/coscharis-motors/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}`}
      key={vehicle.name}
      className="group flex h-full flex-col overflow-hidden border border-black/10 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 relative rounded"
    >
      <div className="absolute top-2 left-1">
        <span className="bg-red-700 px-4 py-2 text-sm text-white font-semibold capitalize">
          new arrival
        </span>
      </div>
      <div className="relative h-50 sm:h-48 lg:h-52">
        <Image
          src={vehicle.mainImage}
          alt={vehicle.name}
          fill
          unoptimized
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-4 pb-2 text-start">
        <p className="text-xs uppercase font-semibold mb-2 text-black/45 tracking-[0.35em]">
          {vehicle.category}
        </p>
        <p className="text-2xl font-black">{vehicle.name}</p>
        <p className="font-semibold text-black/65">M 320i</p>

        <div className="flex flex-wrap gap-1 mt-3">
          <span className="border border-black/10 bg-black/3 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/65">
            Automatic
          </span>

          <span className="border border-black/10 bg-black/3 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/65">
            4 x 4 Drive
          </span>

          <span className="border border-black/10 bg-black/3 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/65">
            5.3L
          </span>

          <span className="border border-black/10 bg-black/3 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/65">
            5 seats
          </span>
        </div>

        <p className="text-2xl font-black mt-4">
          <span className="text-xs uppercase text-black/65 font-semibold tracking-[0.35em] mr-2">
            from
          </span>
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0,
          }).format(Number(vehicle.startingPrice))}
        </p>

        <div className="mt-3 flex max-[541px]:justify-between gap-x-5 max-[541px]:gap-0">
          <button className="inline-flex items-center gap-2 max-[541px]:gap-1 bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-transform duration-300 hover:translate-x-1 justify-center">
            <span>test drive</span>

            <HiOutlineArrowLongRight className="text-lg" />
          </button>

          <button className="inline-flex items-center gap-2 max-[541px]:gap-1 border border-black/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-transform duration-300 hover:translate-x-1 justify-center">
            <span>get quote</span>
            <HiOutlineArrowLongRight className="text-lg" />
          </button>
        </div>
      </div>
    </Link>
  );
};
