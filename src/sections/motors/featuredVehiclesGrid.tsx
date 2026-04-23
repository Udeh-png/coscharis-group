import { FeaturedCars } from "@/data";
import Image from "next/image";
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
          {FeaturedCars.filter((_, i) => i < 5).map((car) => (
            <article
              key={car.name}
              className="border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-6 h-56 border border-black/8 bg-linear-to-br from-slate-50 to-white p-4">
                <Image
                  src={car.imageSrc}
                  alt={car.name}
                  fill
                  unoptimized
                  className="object-contain p-4"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                {car.category}
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-black">
                {car.name}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {car.keySpecs.map((spec) => (
                  <span
                    key={spec}
                    className="border border-black/10 bg-black/3 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/65"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex max-[541px]:flex-col max-[541px]:items-stretch items-end justify-between gap-4 border-t border-black/10 pt-5">
                <div className="flex flex-col gap-2 max-[541px]:flex-row max-[541px]:items-center max-[541px]:justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-black/45">
                    Starting From
                  </p>
                  <p className="text-2xl font-black text-black">
                    {new Intl.NumberFormat("en-NG", {
                      style: "currency",
                      currency: "NGN",
                      notation: "compact",
                    }).format(Number(car.startingPrice))}
                  </p>
                </div>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-transform duration-300 hover:translate-x-1 max-[541px]:w-fit max-[541px]:self-end"
                >
                  Book Test Drive
                  <HiOutlineArrowLongRight className="text-lg" />
                </Link>
              </div>
            </article>
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
