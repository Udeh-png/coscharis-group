"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgClose, CgMenuLeft } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const companyLinks = [
  { label: "Motors", href: "/divisions/motors" },
  { label: "Technologies", href: "/" },
  { label: "Mobility", href: "/" },
  { label: "Motor Assembly", href: "/" },
  { label: "Beverages", href: "/" },
  { label: "Medicine & Foods", href: "/" },
  { label: "Farms", href: "/" },
  { label: "Ghana", href: "/" },
];

const navLinks = [
  { label: "About Coscharis", href: "/" },
  { label: "News & Events", href: "/" },
  { label: "Investor Relations", href: "/" },
  { label: "Leadership", href: "/" },
];

export const Navbar = () => {
  const [isOverlaid, setIsOverlaid] = useState(false);
  const [mobileMenuChecked, setMobileMenuChecked] = useState(false);
  const [mobileCompaniesChecked, setMobileCompaniesChecked] = useState(false);

  return (
    <>
      <motion.div
        onViewportEnter={() => setIsOverlaid(false)}
        onViewportLeave={() => setIsOverlaid(true)}
        className="h-15 w-15"
      />

      <nav
        className={`fixed h-fit inset-x-0 z-30 flex items-center justify-between gap-10 px-10 py-3 transition-all max-[541px]:px-5 ${
          isOverlaid
            ? "border-b border-black/8 bg-background-primary/92 text-black shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "border-b border-white/12 bg-black/12 text-white backdrop-blur-sm"
        }`}
      >
        <Link
          href="/"
          className="relative h-10 w-20 max-[460px]:h-8 max-[460px]:w-16"
          aria-label="Coscharis Group home"
          onClick={() => setMobileMenuChecked(false)}
        >
          <Image src="/images/logo.png" alt="" fill sizes="80px" />
        </Link>

        <ul className="flex items-center gap-1 text-xs font-bold capitalize tracking-[0.22em] max-[955px]:hidden">
          <li>
            <div className="group relative">
              <button
                type="button"
                className="relative flex items-center gap-2 px-4 py-3 transition-colors hover:text-red-700 outline-none"
              >
                <span>Companies</span>
                <FaChevronDown className="text-[0.58rem] transition-transform group-hover:rotate-180" />
              </button>

              <div className="pointer-events-none absolute left-0 top-full w-88 translate-y-5 pt-3 opacity-0 transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 will-change-transform">
                <div className="border border-black/8 bg-background-primary p-2 text-black shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
                  <div className="border border-black/8 p-3">
                    <ul className="grid gap-1">
                      {companyLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            className="group/link flex items-center justify-between border-b border-black/8 px-3 py-3 text-xs font-extrabold tracking-[0.18em] last:border-b-0 hover:bg-black focus:bg-black hover:text-white focus:text-white will-change-[color]"
                            href={link.href}
                          >
                            <span>{link.label}</span>
                            <HiOutlineArrowLongRight className="text-base opacity-0 transition-all group-hover/link:opacity-100 group-focus/link:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block px-4 py-3 transition-colors hover:text-red-700"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/contact-us"
              className="ml-2 inline-flex items-center gap-2 bg-red-700 px-5 py-3 text-white transition-transform hover:translate-x-1"
            >
              <span>Contact Us</span>
              <HiOutlineArrowLongRight className="text-base" />
            </Link>
          </li>
        </ul>

        <button
          className={`hidden cursor-pointer text-3xl max-[955px]:block`}
          aria-label="Open mobile menu"
          onClick={() => setMobileMenuChecked(true)}
        >
          <CgMenuLeft />
        </button>

        <div
          className={`fixed top-0 right-0 w-full max-h-dvh overflow-y-auto bg-background-primary text-black transition-transform duration-500 min-[620px]:w-lg ${
            mobileMenuChecked ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative min-h-dvh overflow-hidden p-5">
            <div className="absolute -right-24 top-24 h-56 w-56 rounded-full bg-accent-primary/15 blur-3xl" />
            <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-accent-secondary/10 blur-3xl" />

            <div className="relative flex items-center justify-between border-b border-black/10 pb-5">
              <Link
                href="/"
                className="relative block h-10 w-20 max-[460px]:h-8 max-[460px]:w-16"
                aria-label="Coscharis Group home"
              >
                <Image src="/images/logo.png" alt="" fill sizes="80px" />
              </Link>

              <button
                className="cursor-pointer border border-black/15 p-2 text-2xl"
                aria-label="Close mobile menu"
                onClick={() => setMobileMenuChecked(false)}
              >
                <CgClose />
              </button>
            </div>

            <div className="relative pt-10" id="">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-black/40">
                Navigate Coscharis
              </p>

              <ul className="mt-7 text-3xl font-black leading-none tracking-[-0.04em] max-[460px]:text-[1.75rem]">
                {navLinks.map((link) => (
                  <li key={link.label} className="border-b border-black/10">
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-5 transition-all hover:text-red-700 nav`}
                      onClick={() => setMobileMenuChecked(false)}
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}

                <li className="">
                  <button
                    className="flex w-full items-center z-10 justify-between border-b border-black/10 transition-colors hover:text-red-700 outline-none"
                    onClick={() =>
                      setMobileCompaniesChecked(!mobileCompaniesChecked)
                    }
                  >
                    <span className="flex items-center justify-between py-5">
                      Companies
                    </span>
                    <FaChevronDown className="text-lg peer-checked:rotate-180" />
                  </button>

                  <ul
                    className={`text-2xl px-5 overflow-clip transition-[height] ${mobileCompaniesChecked ? "h-135" : "h-0"}`}
                  >
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="border-b border-black/10 block py-4 text-black/92 font-bold"
                          onClick={() => {
                            setMobileCompaniesChecked(false);
                            setMobileMenuChecked(false);
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>

              <Link
                href="/contact-us"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 bg-red-700 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-transform hover:translate-x-1"
              >
                Contact Us
                <HiOutlineArrowLongRight className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
