import { CoscharisMotorsServices } from "@/data";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const OurServices = () => {
  return (
    <section className="px-5 py-10 md:px-10 bg-black/5">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-black/45 mb-5">
        Our Services
      </p>

      <h3 className="text-center text-5xl font-black leading-none text-black max-[541px]:text-4xl max-w-2xl mx-auto">
        The Services We Offer at Coscharis Motors
      </h3>

      <div className="grid grid-cols-4 max-[990px]:grid-cols-2 max-[670px]:grid-cols-1 gap-6 mt-10">
        {CoscharisMotorsServices.map(({ description, eyebrow, title }) => (
          <article
            key={eyebrow}
            className="border border-black/10 bg-white/75 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="text-2xl font-semibold text-black/35 mb-15 inline-block">
              {eyebrow}
            </span>

            <h4 className="font-semibold mb-3 text-lg">{title}</h4>

            <p className="text-sm text-black/75 ">{description}</p>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-10 mx-auto bg-red-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:translate-x-1"
        >
          <span>Make An Enquiry</span>
          <HiOutlineArrowLongRight className="text-lg" />
        </Link>
      </div>
    </section>
  );
};
