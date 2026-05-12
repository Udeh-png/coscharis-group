"use client";

import { DetailsCtaShouldShowContext } from "@/contexts/DetailsCtaContext";
import { Vehicle } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SpecDropdown = ({ name, specs }: { name: string; specs: object }) => {
  const [dropdownClicked, setDropdownClicked] = useState(false);
  return (
    <div>
      <button
        className="flex items-center justify-between border-b border-black/30 py-3 w-full cursor-pointer outline-none"
        onClick={() => {
          setDropdownClicked(!dropdownClicked);
        }}
      >
        <h4 className="text-xl font-bold leading-none">{name}</h4>
        <FaChevronDown
          className={`leading-none transition-transform ${dropdownClicked && "-rotate-180"}`}
        />
      </button>
      <AnimatePresence>
        {dropdownClicked && (
          <motion.ul
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="px-5 max-[760px]:px-0 grid grid-cols-2 max-[760px]:gap-y-5 gap-y-7 max-[760px]:grid-cols-1 gap-x-10 overflow-clip"
          >
            {Object.entries(specs).map((spec, i) => {
              return (
                <li
                  className={`flex justify-between py-3 border-black/30 border-b ${i < 1 ? "pt-7" : ""}`}
                  key={i}
                >
                  <span className="text-gray-500 capitalize">
                    {spec[0].replaceAll("_", " ")}
                  </span>
                  <span className="font-medium">{spec[1]}</span>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SpecsAndTestDriveForm = ({ vehicle }: { vehicle: Vehicle }) => {
  const { performanceSpecs, dimensions } = vehicle;
  const [ctaShouldShow] = useContext(DetailsCtaShouldShowContext);
  return (
    <div className="px-10 max-[760px]:px-5 grid grid-cols-[1.5fr_1fr] max-[760px]:grid-cols-1 gap-10 mb-15 max-[760px]:mb-7">
      <div className="space-y-20 max-[760px]:space-y-10">
        <div>
          <p className="text-sm text-black/45 tracking-[0.35em] uppercase font-bold mb-5 max-[760px]:mb-3">
            Quick Checks
          </p>
          <h3 className="text-4xl max-[760px]:text-3xl font-black leading-none mb-4 capitalize">
            Key Specifications
          </h3>
          <ul className="grid grid-cols-2 gap-y-10 gap-x-10 max-[760px]:gap-5 max-[760px]:grid-cols-1">
            <li className="flex justify-between py-3 border-black/30 border-b">
              <span className="text-gray-500">Body Type</span>
              <span className="font-medium">SUV</span>
            </li>
            <li className="flex justify-between py-3 border-black/30 border-b">
              <span className="text-gray-500">Build Year</span>
              <span className="font-medium">2019</span>
            </li>
            <li className="flex justify-between py-3 border-black/30 border-b">
              <span className="text-gray-500">Transmission</span>
              <span className="font-medium">8-speed Automatic</span>
            </li>
            <li className="flex justify-between py-3 border-black/30 border-b">
              <span className="text-gray-500">Seating Capacity</span>
              <span className="font-medium">5 Seats</span>
            </li>
            <li className="flex justify-between py-3 border-black/30 border-b">
              <span className="text-gray-500">Drive Train</span>
              <span className="font-medium">Four-Wheel Drive (4x4)</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-black/45 tracking-[0.35em] uppercase font-bold mb-5 max-[760px]:mb-3">
            Highlights
          </p>
          <h3 className="text-4xl max-[760px]:text-3xl font-black leading-none mb-4 capitalize">
            Features And Tech Specs
          </h3>

          <ul className="grid grid-cols-2 gap-y-10 gap-x-10 max-[760px]:gap-5 max-[760px]:grid-cols-1">
            <li className="flex justify-between items-center py-3 border-black/30 border-b">
              <span>Heated Seats</span>
              <IoMdCheckmarkCircleOutline className="text-2xl text-black/45" />
            </li>

            <li className="flex justify-between items-center py-3 border-black/30 border-b">
              <span>Ventilated Seats</span>
              <IoMdCheckmarkCircleOutline className="text-2xl text-black/45" />
            </li>

            <li className="flex justify-between items-center py-3 border-black/30 border-b">
              <span>Dual Climate Control</span>
              <IoMdCheckmarkCircleOutline className="text-2xl text-black/45" />
            </li>

            <li className="flex justify-between items-center py-3 border-black/30 border-b">
              <span>Android Auto</span>
              <IoMdCheckmarkCircleOutline className="text-2xl text-black/45" />
            </li>

            <li className="flex justify-between items-center py-3 border-black/30 border-b">
              <span>Apple CarPlay</span>
              <IoMdCheckmarkCircleOutline className="text-2xl text-black/45" />
            </li>

            <li className="flex justify-between items-center py-3 border-black/30 border-b">
              <span>360 Camera</span>
              <IoMdCheckmarkCircleOutline className="text-2xl text-black/45" />
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-black/45 tracking-[0.35em] uppercase font-bold mb-5 max-[760px]:mb-3">
            dealer comments
          </p>
          <h3 className="text-4xl max-[760px]:text-3xl font-black leading-none mb-4 capitalize">
            About the Land Rover Defender 130 X-Dynamic
          </h3>

          <p className="leading-relaxed text-black/75">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            suscipit fugiat voluptas blanditiis perferendis quidem dolorem magni
            enim omnis, iure est ratione dolore assumenda. Dolorem iusto sunt ea
            velit recusandae? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. <br /> <br /> Suscipit dicta quos tenetur explicabo
            recusandae, reiciendis sed nesciunt accusantium velit
            exercitationem? Nemo autem, laboriosam velit expedita excepturi
            impedit similique qui veniam.
          </p>
        </div>

        <div>
          <p className="text-sm text-black/45 tracking-[0.35em] uppercase font-bold mb-5 max-[760px]:mb-3">
            full specs
          </p>
          <h3 className="text-4xl max-[760px]:text-3xl font-black leading-none mb-5 capitalize">
            All Vehicle Specifications
          </h3>

          <ul className="space-y-10 max-[760px]:space-y-7">
            <li>
              <SpecDropdown name="Performance" specs={performanceSpecs || {}} />
            </li>

            <li>
              <SpecDropdown name="Dimensions" specs={dimensions || {}} />
            </li>

            <li>
              <SpecDropdown name="Technologies" specs={dimensions || {}} />
            </li>

            <li>
              <SpecDropdown name="Interior" specs={dimensions || {}} />
            </li>
          </ul>
        </div>

        <AnimatePresence>
          {ctaShouldShow && (
            <motion.div
              initial={{
                translateY: "100%",
              }}
              animate={{
                translateY: 0,
              }}
              exit={{
                translateY: "100%",
              }}
              transition={{
                type: "tween",
              }}
              className="hidden gap-2 items-center py-3 sticky bottom-0 bg-background-primary max-[760px]:flex"
            >
              <Link
                href={"/"}
                className="inline-flex items-center gap-2 bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-transform duration-300 hover:translate-x-1 justify-center"
              >
                <p>Book Test Drive</p>
                <HiOutlineArrowLongRight className="text-lg" />
              </Link>

              <Link
                href=""
                className="inline-flex items-center border border-black/45 gap-2 px-5 py-[0.688rem] text-xs font-semibold uppercase tracking-widest transition-transform duration-300 hover:translate-x-1  justify-center"
              >
                <p>Get a Quote</p>
                <HiOutlineArrowLongRight className="text-lg" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="sticky top-15 h-fit max-[760px]:hidden">
        <h4 className="text-2xl font-black mb-5">Book Test Drive</h4>

        <form className="space-y-7">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col justify-between flex-1">
              <label
                htmlFor="full-name-input"
                className="text-sm uppercase tracking-[0.2em] text-black/65 font-semibold"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name-input"
                placeholder="Enter your full name"
                className={`border-b border-black/20 bg-transparent px-0 py-2 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-red-700 focus:outline-none`}
              />
            </div>

            <div className="flex flex-col flex-1 gap-y-2">
              <label
                htmlFor="full-name-input"
                className="text-sm uppercase tracking-[0.2em] text-black/65 font-semibold"
              >
                Mode of Contact
              </label>
              <div className="relative">
                <input type="hidden" />
                <button
                  type="button"
                  id="inquire_type-field"
                  aria-haspopup="listbox"
                  aria-expanded={true}
                  className={`flex w-full items-center justify-between border-b border-black/20 bg-transparent px-0 py-2 text-left text-base text-black transition-colors duration-300 hover:border-red-700 focus:border-red-700 focus:outline-none`}
                >
                  <span className={false ? "text-black" : "text-black/35"}>
                    Phone
                  </span>
                  <FaChevronDown className="text-sm text-black/25" />
                </button>
                <AnimatePresence>
                  {false && (
                    <motion.div
                      className="absolute inset-x-0 top-full z-10 mt-2 origin-top border border-black/8 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] text-sm text-black/70 overflow-clip"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        type: "tween",
                      }}
                    >
                      <ul className="flex flex-col">
                        <li>
                          <button>Phone</button>
                        </li>

                        <li>
                          <button>Email</button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col justify-between flex-1">
              <label
                htmlFor="full-name-input"
                className="text-sm uppercase tracking-[0.2em] text-black/65 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="full-name-input"
                placeholder="Enter your Email Address"
                className={`border-b border-black/20 bg-transparent px-0 py-2 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-red-700 focus:outline-none`}
              />
            </div>

            <div className="flex flex-col flex-1 gap-y-2">
              <label
                htmlFor="full-name-input"
                className="text-sm uppercase tracking-[0.2em] text-black/65 font-semibold"
              >
                Date
              </label>
              <input
                type="date"
                id="full-name-input"
                placeholder="Select a date"
                className={`border-b border-black/20 bg-transparent px-0 py-2 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-red-700 focus:outline-none`}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col justify-between flex-1">
              <label
                htmlFor="full-name-input"
                className="text-sm uppercase tracking-[0.2em] text-black/65 font-semibold"
              >
                Time
              </label>
              <input
                type="time"
                id="full-name-input"
                placeholder="Select a time"
                className={`border-b border-black/20 bg-transparent px-0 py-2 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-red-700 focus:outline-none`}
              />
            </div>

            <div className="flex flex-col flex-1 gap-y-2">
              <label
                htmlFor="full-name-input"
                className="text-sm uppercase tracking-[0.2em] text-black/65 font-semibold"
              >
                State of Residence
              </label>
              <div className="relative">
                <input type="hidden" />
                <button
                  type="button"
                  id="inquire_type-field"
                  aria-haspopup="listbox"
                  aria-expanded={true}
                  className={`flex w-full items-center justify-between border-b border-black/20 bg-transparent px-0 py-2 text-left text-base text-black transition-colors duration-300 hover:border-red-700 focus:border-red-700 focus:outline-none`}
                >
                  <span className={false ? "text-black" : "text-black/35"}>
                    State of residence
                  </span>
                  <FaChevronDown className="text-sm text-black/25" />
                </button>
                <AnimatePresence>
                  {false && (
                    <motion.div
                      className="absolute inset-x-0 top-full z-10 mt-2 origin-top border border-black/8 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] text-sm text-black/70 overflow-clip"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        type: "tween",
                      }}
                    >
                      <ul className="flex flex-col">
                        <li>
                          <button>Phone</button>
                        </li>

                        <li>
                          <button>Email</button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-y-2">
            <label
              htmlFor="full-name-input"
              className="text-sm uppercase tracking-[0.2em] text-black/65 font-semibold"
            >
              Preferred Branch
            </label>
            <div className="relative">
              <input type="hidden" />
              <button
                type="button"
                id="inquire_type-field"
                aria-haspopup="listbox"
                aria-expanded={true}
                className={`flex w-full items-center justify-between border-b border-black/20 bg-transparent px-0 py-2 text-left text-base text-black transition-colors duration-300 hover:border-red-700 focus:border-red-700 focus:outline-none`}
              >
                <span className={false ? "text-black" : "text-black/35"}>
                  Select one of our branches
                </span>
                <FaChevronDown className="text-sm text-black/25" />
              </button>
              <AnimatePresence>
                {false && (
                  <motion.div
                    className="absolute inset-x-0 top-full z-10 mt-2 origin-top border border-black/8 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] text-sm text-black/70 overflow-clip"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                    }}
                  >
                    <ul className="flex flex-col">
                      <li>
                        <button>Phone</button>
                      </li>

                      <li>
                        <button>Email</button>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-y-2">
            <label
              htmlFor="message-textarea"
              className="text-sm font-medium uppercase tracking-[0.2em] text-black/65"
            >
              Message
            </label>
            <textarea
              id="message-textarea"
              spellCheck={true}
              placeholder="Share a few details so the right team can reach you."
              className={`resize-none border-b border-black/20 bg-transparent py-2 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-red-700 focus:outline-none`}
            />
          </div>

          <div className="justify-self-end">
            <button className="inline-flex items-center gap-2 bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-transform duration-300 hover:translate-x-1 justify-center">
              <span>Submit</span>

              <HiOutlineArrowLongRight className="text-lg" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

{
  /*
    {
      specs.map((spec, i) => {
        return (
          <li className={`flex justify-between py-3 border-black/30 border-b ${i < 2 ? "pt-5" : ""}`} key={i}>
            <span className="text-gray-500">{Object.keys(spec)[0]}</span>
            <span className="font-medium"> {Object.values(spec)[0]}</span>
          </li>
        )
      })
    }
  */
}
