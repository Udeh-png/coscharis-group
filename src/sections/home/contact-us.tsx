import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const ContactUs = () => {
  return (
    <section className="relative mt-15 overflow-hidden bg-black/5 text-black max-[541px]:mt-10">
      <div className="relative grid min-h-96 grid-cols-[1.15fr_0.85fr] gap-10 px-10 py-14 max-[980px]:grid-cols-1 max-[980px]:gap-5 max-[980px]:px-6 max-[980px]:py-10 max-[541px]:px-5 max-[541px]:py-8">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/45">
              Contact Us
            </p>
            <h3 className="mt-5 max-w-2xl text-5xl font-black leading-none max-[980px]:max-w-xl max-[541px]:text-3xl">
              Get in touch with the right team for your needs.
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/68 max-[541px]:text-base">
              Whether you&apos;re planning a purchase, exploring a partnership,
              discussing distribution, or reaching out about a specific
              Coscharis business, we&apos;ll direct you to the right team.
            </p>
          </div>
        </div>

        <div className="self-center max-[541px]:justify-self-start justify-self-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-red-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:translate-x-1"
          >
            Go To Contact Page
            <HiOutlineArrowLongRight className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
};
