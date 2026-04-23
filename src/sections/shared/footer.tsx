/* eslint-disable react-hooks/incompatible-library */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import z from "zod";
import { Businesses } from "@/data";

const newsLetterSignupSchema = z.object({
  emailField: z.email(),
  businessSelect: z.string(),
});

type NewsLetterSignupType = z.infer<typeof newsLetterSignupSchema>;

export const Footer = () => {
  const { register, handleSubmit, watch, setValue } =
    useForm<NewsLetterSignupType>({
      resolver: zodResolver(newsLetterSignupSchema),
    });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const businessOptions = ["All", ...Businesses, "Non-Specific"];

  const submitForm: SubmitHandler<NewsLetterSignupType> = (data) => {
    console.log(data);
  };

  const selectedBusiness = watch("businessSelect");
  const [businessesDropdown, setBusinessesDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setBusinessesDropdown(false);
      }
    };

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setBusinessesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keyup", handleEscKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keyup", handleEscKeyPress);
    };
  }, []);

  return (
    <footer className="bg-black/92 px-7 pt-7 text-white/90 max-[900px]:px-5 max-[541px]:pt-6">
      <div className="flex gap-8 max-[1100px]:flex-col-reverse">
        <div className="grid grid-cols-3 gap-8 max-[1100px]:grid-cols-2 max-[1100px]:gap-y-8 h-fit flex-3">
          <div>
            <h3 className="font-semibold text-xl mb-2.5 max-[541px]:mb-1 text-white">
              Footer section
            </h3>
            <ul className="space-y-1 text-sm capitalize">
              <li>Lorem Ipsum</li>
              <li>Consequuntur alias.</li>
              <li>Dolor</li>
              <li>ipsum dolor</li>
              <li>Lorem dolor sit</li>
              <li>sit amet</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold text-xl mb-2.5 max-[541px]:mb-1 text-white">
              Footer section
            </h3>
            <ul className="space-y-1 text-sm capitalize">
              <li>tempora</li>
              <li>optio illo eum</li>
              <li>reprehenderit</li>
              <li>modi</li>
              <li>debitis cumque</li>
              <li>Aperiam</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2.5 max-[541px]:mb-1 text-white">
              Footer section
            </h3>
            <ul className="space-y-1 text-sm capitalize">
              <li>optio lorem</li>
              <li>accusamus in dignissimos</li>
              <li>Fuga</li>
              <li>Saepe ipsa voluptatibus</li>
              <li>blanditiis</li>
              <li>temporibus</li>
            </ul>
          </div>
        </div>
        <div className="ml-10 grid grid-cols-[1.15fr_0.85fr] gap-10 max-[1200px]:ml-0 max-[900px]:grid-cols-1 max-[900px]:gap-8 flex-3">
          <div>
            <h3 className="font-semibold text-xl mb-2.5 max-[541px]:mb-1 text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mb-4 max-w-lg text-sm leading-relaxed text-white/65">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur, blanditiis, quos ratione maiores eveniet
            </p>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="flex flex-col space-y-5 text-sm">
                <input
                  type="email"
                  className="border-b border-white/35 bg-transparent pb-2 font-semibold text-white outline-none placeholder:text-white/40 focus:border-red-700"
                  placeholder="Enter your email"
                  {...register("emailField")}
                />
                <div ref={dropdownRef} className="relative">
                  <input
                    type="hidden"
                    autoComplete={undefined}
                    {...register("businessSelect")}
                  />
                  <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={businessesDropdown}
                    className="flex w-full cursor-pointer items-center justify-between border-b border-white/35 pb-2 text-left font-semibold outline-none transition-colors duration-300 hover:border-red-700 focus:border-red-700"
                    onClick={() => setBusinessesDropdown(!businessesDropdown)}
                  >
                    <span
                      className={`${selectedBusiness ? "text-inherit" : "text-white/40"}`}
                    >
                      {selectedBusiness || "Select a business"}
                    </span>
                    <FaChevronDown
                      className={`text-white/70 transition-transform duration-300 ${businessesDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {businessesDropdown && (
                      <motion.div
                        className="absolute inset-x-0 bottom-full max-[1100px]:bottom-auto max-[1100px]:top-full z-10 mt-3 overflow-hidden border border-white/10 bg-[#151515] shadow-[0_22px_50px_rgba(0,0,0,0.35)] caret-transparent"
                        initial={{
                          opacity: 0,
                          y: "var(--footer-dropdown-dir)",
                        }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "var(--footer-dropdown-dir)" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <ul className="flex flex-col py-2">
                          {businessOptions.map((option) => (
                            <li key={option}>
                              <button
                                type="button"
                                className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors duration-200 hover:bg-white/8 focus:bg-white/8 focus:outline-none ${selectedBusiness === option ? "bg-white/8 text-white" : "text-white/70"}`}
                                onClick={() => {
                                  setValue("businessSelect", option, {
                                    shouldDirty: true,
                                    shouldTouch: true,
                                  });
                                  setBusinessesDropdown(false);
                                }}
                              >
                                <span>{option}</span>
                                {selectedBusiness === option ? (
                                  <span className="text-[10px] uppercase tracking-[0.28em] text-red-500">
                                    Selected
                                  </span>
                                ) : null}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className="flex items-center gap-3 border-b-2 border-red-700 pb-1 font-semibold transition-colors duration-300 hover:border-white"
                  >
                    <p>Subscribe</p>
                    <HiOutlineArrowLongRight className="text-lg" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-center gap-y-7 max-[900px]:border-t max-[900px]:border-white/10 max-[900px]:pt-6">
            <div className="flex flex-col max-[900px]:items-start items-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">
                Follow us
              </p>
              <div className="mt-4 flex gap-5 text-2xl">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="transition-colors duration-300 hover:text-red-500"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="transition-colors duration-300 hover:text-red-500"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="transition-colors duration-300 hover:text-red-500"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            <div className="flex flex-col max-[900px]:items-start items-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em]">
                Reach out
              </p>
              <div className="mt-3 space-y-4 text-xs max-[1100px]:text-sm text-white/70">
                <div className="flex gap-2">
                  <FaLocationDot className="mt-0.5 shrink-0" />
                  <p className="align-text-middle">
                    Km 32 Lekki - Epe Expressway, Awoyaya, Lagos, Nigeria
                  </p>
                </div>

                <div className="flex gap-2">
                  <FaPhone className="mt-0.5 shrink-0" />
                  <p className="align-text-middle">+234-808-116-9830</p>
                </div>

                <div className="flex gap-2">
                  <MdEmail className="mt-0.5 shrink-0" />
                  <p className="align-text-middle">
                    leonwokedichisom@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pb-3 pt-5 text-xs">
        <div className="flex justify-between gap-4 max-[700px]:flex-col">
          <div>
            <p className="mb-1">Coscharis Group &trade;</p>

            <p>&copy;{new Date().getFullYear()}</p>
          </div>

          <p>
            User Interface & Content by, The Man! The Myth! The Legend! UDEH
            CHISOM.
          </p>
        </div>
      </div>
    </footer>
  );
};

{
  /*
    Tempore cum libero nesciunt excepturi ab fugit
  */
}
