import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const ContactsAndLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState("Lagos");
  const [showLocations, setShowLocations] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowLocations(false);
      }
    };

    const handleEscClick = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowLocations(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keyup", handleEscClick);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keyup", handleEscClick);
    };
  }, []);
  return (
    <section className="flex flex-col-reverse gap-10 bg-black/5 px-5 py-10 md:px-10 lg:flex-row lg:gap-20">
      <div className="flex-1">
        <p className="text-sm uppercase tracking-[0.35em] text-black/45 font-semibold mb-5 max-[770px]:hidden">
          Locations and contacts
        </p>

        <div
          className="relative w-full max-w-xs caret-transparent"
          ref={dropdownRef}
        >
          <button
            className="relative w-full cursor-pointer border-b border-black/35 px-1 py-1 text-start outline-none"
            onClick={() => setShowLocations((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={showLocations}
          >
            <span className="text-black">{selectedLocation}</span>
            <FaChevronDown className="text-black/45 absolute right-0 top-1/2 -translate-y-1/2 text-sm" />
          </button>

          <AnimatePresence>
            {showLocations && (
              <motion.div
                className="absolute top-full left-0 w-full mt-2 bg-background-primary shadow-[0_10px_15px_rgba(0,0,0,0.08)] py-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="text-sm">
                  <li>
                    <button
                      className="px-4 py-3 focus:bg-black/5 hover:bg-black/5 outline-none w-full flex justify-between items-center"
                      onClick={() => {
                        setSelectedLocation("Lagos");
                        setShowLocations(false);
                      }}
                    >
                      <span>Lagos</span>
                      {selectedLocation === "Lagos" && (
                        <span className="text-xs text-red-700 font-semibold">
                          Selected
                        </span>
                      )}
                    </button>
                  </li>

                  <li>
                    <button
                      className="px-4 py-3 focus:bg-black/5 hover:bg-black/5 outline-none w-full flex justify-between items-center"
                      onClick={() => {
                        setSelectedLocation("Abuja");
                        setShowLocations(false);
                      }}
                    >
                      <span>Abuja</span>
                      {selectedLocation === "Abuja" && (
                        <span className="text-xs text-red-700 font-semibold">
                          Selected
                        </span>
                      )}
                    </button>
                  </li>

                  <li>
                    <button
                      className="px-4 py-3 focus:bg-black/5 hover:bg-black/5 outline-none w-full flex justify-between items-center"
                      onClick={() => {
                        setSelectedLocation("Port Harcourt");
                        setShowLocations(false);
                      }}
                    >
                      <span>Port Harcourt</span>
                      {selectedLocation === "Port Harcourt" && (
                        <span className="text-xs text-red-700 font-semibold">
                          Selected
                        </span>
                      )}
                    </button>
                  </li>

                  <li>
                    <button
                      className="px-4 py-3 focus:bg-black/5 hover:bg-black/5 outline-none w-full flex justify-between items-center"
                      onClick={() => {
                        setSelectedLocation("Akwa Ibom");
                        setShowLocations(false);
                      }}
                    >
                      <span>Akwa Ibom</span>
                      {selectedLocation === "Akwa Ibom" && (
                        <span className="text-xs text-red-700 font-semibold">
                          Selected
                        </span>
                      )}
                    </button>
                  </li>

                  <li>
                    <button
                      className="px-4 py-3 focus:bg-black/5 hover:bg-black/5 outline-none w-full flex justify-between items-center"
                      onClick={() => {
                        setSelectedLocation("Enugu");
                        setShowLocations(false);
                      }}
                    >
                      <span>Enugu</span>
                      {selectedLocation === "Enugu" && (
                        <span className="text-xs text-red-700 font-semibold">
                          Selected
                        </span>
                      )}
                    </button>
                  </li>

                  <li>
                    <button
                      className="px-4 py-3 focus:bg-black/5 hover:bg-black/5 outline-none w-full flex justify-between items-center"
                      onClick={() => {
                        setSelectedLocation("Ibadan");
                        setShowLocations(false);
                      }}
                    >
                      <span>Ibadan</span>
                      {selectedLocation === "Ibadan" && (
                        <span className="text-xs text-red-700 font-semibold">
                          Selected
                        </span>
                      )}
                    </button>
                  </li>

                  <li>
                    <button
                      className="px-4 py-3 focus:bg-black/5 hover:bg-black/5 outline-none w-full flex justify-between items-center"
                      onClick={() => {
                        setSelectedLocation("Kano");
                        setShowLocations(false);
                      }}
                    >
                      <span>Kano</span>
                      {selectedLocation === "Kano" && (
                        <span className="text-xs text-red-700 font-semibold">
                          Selected
                        </span>
                      )}
                    </button>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:gap-x-12">
          <div className="space-y-2">
            <p>KM 32, Lekki Epe Expressway, Awoyaya, Lagos.</p>

            <p>9:30am - 5:00pm</p>

            <p>+234 808 852 6528</p>
          </div>

          <div className="space-y-2">
            <p>
              1-7, Coscharis Street, Kirikiri Industrial Estate Maza-maza,
              Apapa. Lagos
            </p>

            <p>9:00am - 5:00pm</p>

            <p>+234 808 856 6307</p>
          </div>

          <div className="space-y-2">
            <p>27 Akin Adesola Street, Victoria Island, Lagos.</p>

            <p>9:30am - 4:50pm</p>

            <p>+234 701 348 6194</p>
          </div>

          <div className="space-y-2">
            <p>
              Coscharis Plaza, 68A, Adeola Odeku Street, Victoria Island, Lagos
            </p>

            <p>9:30am - 4:50pm</p>

            <p>+234 701 348 6194</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center lg:max-w-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-black/45 font-semibold hidden max-[770px]:block mb-3">
          Locations and contacts
        </p>

        <h3 className="mb-6 text-4xl font-black leading-none capitalize text-black sm:text-5xl lg:mb-10">
          Get in touch with us
        </h3>

        <p className="max-w-xl text-black/75">
          Whatever questions you might have concerning Coscharis Motors we are
          always ready to listen and respond to you. Reach out to us through any
          of the contact details provided or fill the contact form and we will
          get back to you as soon as possible.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-700 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:translate-x-1"
          >
            <span>Contact Us</span>
            <HiOutlineArrowLongRight className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
};
