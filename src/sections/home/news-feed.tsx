import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const NewsFeeds = () => {
  return (
    <section className="mt-15 max-[541px]:mt-10 px-10 max-[541px]:px-5">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/45">
        news feeds
      </p>

      <div className="grid grid-cols-2 max-[1050px]:grid-cols-1 gap-5 max-[541px]:gap-10 mt-5">
        <aside className="grid grid-rows-[1.5fr_1fr] max-[541px]:grid-rows-2 w-full aspect-square max-[1050px]:aspect-auto">
          <div className="relative">
            <Image
              src={"/images/headline-img.jpg"}
              alt="headline image"
              fill
              sizes=""
              className="object-cover object-top"
            />
          </div>

          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
              development
            </p>

            <p className="font-bold text-3xl max-[541px]:text-2xl mt-2 line-clamp-3 max-[541px]:line-clamp-2 leading-none">
              Coscharis Motors Plc unveils the new Renault Taliant at Abuja
              international motor fair
            </p>

            <p className="text-base leading-relaxed text-black/74 max-[541px]:text-sm mt-2 line-clamp-3">
              Coscharis Motors Plc., a leading automobile dealer and the
              exclusive representative of Renault brand in Nigeria, has once
              again demonstrated its industry leadership by unveiling the
              all-new Renault Taliant at the recently concluded Abuja
              International Motor Fair.
            </p>

            <div className="mt-5 max-[541px]:mt-3 gap-x-5 flex items-center">
              <Link
                href={""}
                className="border-b-2 border-b-red-700 pb-2 max-[541px]:pb-1 inline-flex items-center gap-2 text-sm max-[541px]:text-xs tracking-widest font-semibold hover:translate-x-1 transition-transform duration-300 will-change-transform"
              >
                Read Full Story
                <HiOutlineArrowLongRight className="text-lg" />
              </Link>
            </div>
          </div>
        </aside>

        <aside className="space-y-7 overflow-auto max-h-155">
          <div className="grid grid-cols-[1fr_1.5fr] gap-x-3.5">
            <div className="relative size-full max-h-40">
              <Image
                src={"/images/news1-image.jpg"}
                alt=""
                fill
                sizes=""
                className="object-cover"
              />
            </div>

            <div className="">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                empowerment
              </p>

              <p className="font-bold line-clamp-2 max-[541px]:line-clamp-3 max-[541px]:leading-none">
                Coscharis Group promises value for money
              </p>

              <p className="text-sm leading-relaxed text-black/74 mt-1 line-clamp-3 max-[541px]:hidden">
                Rising from a two day strategy retreat session, members of Board
                of Directors of all the Companies within the Coscharis Group
                have resolved to further deliver value for money to their
                numerous customers in all ramifications of their customer
                engagement.
              </p>

              <div className="mt-5 max-[541px]:mt-3 gap-x-5 flex items-center text-xs">
                <Link
                  href={""}
                  className="border-b-2 border-b-red-700 pb-2 max-[541px]:pb-1 inline-flex items-center gap-2 tracking-widest font-semibold hover:translate-x-1 transition-transform duration-300 will-change-transform"
                >
                  Read Full Story
                  <HiOutlineArrowLongRight className="text-lg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1.5fr] gap-x-3.5">
            <div className="relative size-full max-h-40">
              <Image
                src={"/images/news2-image.jpg"}
                alt=""
                fill
                sizes=""
                className="object-cover"
              />
            </div>

            <div className="">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                empowerment
              </p>

              <p className="font-bold line-clamp-2 max-[541px]:line-clamp-3 max-[541px]:leading-none">
                Geely Global relaunches in Nigeria with Coscharis Motors plc
              </p>

              <p className="text-sm leading-relaxed text-black/74 mt-1 line-clamp-3 max-[541px]:hidden">
                Geely Auto International Corporation has named Coscharis Motors
                as its official retail partner in Nigeria. Consequently,
                Coscharis Motors becomes the exclusive franchise representative
                of Geely Global in Nigeria and sets to officially launch the
                latest Geely models into the Nigerian market very soon.
              </p>

              <div className="mt-5 max-[541px]:mt-3 gap-x-5 flex items-center text-xs">
                <Link
                  href={""}
                  className="border-b-2 border-b-red-700 pb-2 max-[541px]:pb-1 inline-flex items-center gap-2 tracking-widest font-semibold hover:translate-x-1 transition-transform duration-300 will-change-transform"
                >
                  Read Full Story
                  <HiOutlineArrowLongRight className="text-lg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1.5fr] gap-x-3.5">
            <div className="relative size-full max-h-40">
              <Image
                src={
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuARBG8RngJ4SfecfW4OzC9n4EDjRiJHnfIBMh4bAj8L3pMrX3WXU8IN2n9plBfvY-pwfHRfMGGfgAP4cn67jw3CO4ZAebTZ91InyEaHxqwa-VO8qf0tHEAXBOjbyQklPcij9dCqjLSdqgGJKmXw3k65CI6zXnD3ktXnoSD3nqfr1fauIi4jGNa2hOZ7XgZBo-fnCPiNsX15kJEBmRmRyW6gEt20tNgf-u4_rzOO6zb6YVR9Td0nWq__xlvThkiJ_F0d7e388trlWqE"
                }
                alt=""
                fill
                sizes=""
                className="object-cover"
              />
            </div>

            <div className="">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                empowerment
              </p>

              <p className="font-bold line-clamp-2 max-[541px]:line-clamp-3 max-[541px]:leading-none">
                Coscharis Technologies Limited announces $4 billion green power
                project in Nigeria
              </p>

              <p className="text-sm leading-relaxed text-black/74 mt-1 line-clamp-3 max-[541px]:hidden">
                Coscharis Technologies Limited a subsidiary of the Coscharis
                Group and a leading player in the Information Communication and
                Technology (ICT) sector in Nigeria and the Sub &dash; Saharan
                Africa is an authorized distributor of a wide number of globally
                respected IT brands delivering reliable hardware and service
                solutions.
              </p>

              <div className="mt-5 max-[541px]:mt-3 gap-x-5 flex items-center text-xs">
                <Link
                  href={""}
                  className="border-b-2 border-b-red-700 pb-2 max-[541px]:pb-1 inline-flex items-center gap-2 tracking-widest font-semibold hover:translate-x-1 transition-transform duration-300 will-change-transform"
                >
                  Read Full Story
                  <HiOutlineArrowLongRight className="text-lg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1.5fr] gap-x-3.5">
            <div className="relative size-full max-h-40">
              <Image
                src={"/images/news4-image.jpg"}
                alt=""
                fill
                sizes=""
                className="object-cover"
              />
            </div>

            <div className="">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                empowerment
              </p>

              <p className="font-bold line-clamp-2 max-[541px]:line-clamp-3 max-[541px]:leading-none">
                Coscharis Group founder inducted as fellow, chartered institute
                of directors, Nigeria
              </p>

              <p className="text-sm leading-relaxed text-black/74 mt-1 line-clamp-3 max-[541px]:hidden">
                The President/CEO of Coscharis Group, Dr. Cosmas Maduka, CON,
                was recently conferred with the prestigious Fellow of the
                Chartered Institute of Directors, Nigeria in recognition for his
                exceptional contribution to Corporate Governance and Leadership
                at the Institute&apos;s 2024 Fellow&apos;s Night and Investiture
                Ceremony in Lagos.
              </p>

              <div className="mt-5 max-[541px]:mt-3 gap-x-5 flex items-center text-xs">
                <Link
                  href={""}
                  className="border-b-2 border-b-red-700 pb-2 max-[541px]:pb-1 inline-flex items-center gap-2 tracking-widest font-semibold hover:translate-x-1 transition-transform duration-300 will-change-transform"
                >
                  Read Full Story
                  <HiOutlineArrowLongRight className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
