import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import {
  SiBmw,
  SiFord,
  SiJaguar,
  SiLandrover,
  SiMini,
  SiRenault,
  SiRollsroyce,
} from "react-icons/si";

export const Hero = () => {
  const carIcons = [
    SiBmw,
    SiJaguar,
    SiRollsroyce,
    SiFord,
    SiRenault,
    SiLandrover,
    SiMini,
  ];
  return (
    <div className="h-dvh relative -mt-15 text-white">
      <div className="absolute inset-0">
        <Image
          src="https://coscharisgroup.net/wp-content/themes/coscharis1/images/2.jpg"
          alt=""
          fill
          sizes="200vw"
          className="object-cover object-top max-[750px]:object-[60%_50%]"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r bg-black/20" />
      <div className="size-full flex flex-col gap-y-15 justify-center max-[750px]:items-start items-center relative max-[750px]:px-5">
        <div className="max-w-2xl text-center max-[750px]:text-start max-[750px]:pr-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/75 font-bold mb-2">
            value for money
          </p>
          <h2 className="text-7xl font-bold mb-2 max-[750px]:text-5xl">
            Coscharis Motors
          </h2>
          <p className="text-xl max-[750px]:text-base mb-5">
            From individual buyers to corporate clients, we offer flexible
            vehicle sales solutions for every need.
          </p>
          <div className="flex max-[750px]:flex-col max-[750px]:items-start items-center justify-center gap-4">
            <Link
              href={"/"}
              className="inline-flex items-center gap-2 bg-red-700 px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white transition-transform duration-300 hover:translate-x-1"
            >
              Explore out Vehicles
              <HiMiniArrowLongRight />
            </Link>

            <Link
              href={"/"}
              className="inline-flex items-center gap-2 border border-white px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white/88 transition-all duration-300 hover:translate-x-1"
            >
              Talk to Sales
              <HiMiniArrowLongRight />
            </Link>
          </div>
        </div>

        <aside className="absolute bottom-7 max-w-dvw max-[750px]:bottom-5 left-1/2 -translate-x-1/2 flex gap-23 max-[950px]:gap-13 text-6xl max-[1024px]:text-5xl text-white/80 max-[950px]:overflow-auto max-[950px]:px-5">
          {carIcons.map((Icon) => {
            return (
              <Link href={"/"} key={Icon.name}>
                <Icon />
              </Link>
            );
          })}
        </aside>
      </div>
    </div>
  );
};
