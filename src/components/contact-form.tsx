"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import z from "zod";

const contactFormSchema = z.object({
  fullNameField: z
    .string()
    .min(1, "This field is required")
    .regex(/^[A-Za-z ]+$/, "Invalid nam")
    .min(3, "Invalid name"),
  emailField: z.email().min(1, "This field is required"),
  inquiryTypeField: z.string().min(1, "This field is required"),
  phoneNumberField: z
    .string()
    .min(1, "This field is required")
    .regex(/^[0-9+]+$/, "Invalid phone number")
    .length(11, "Invalid phone number"),
  messageTextarea: z.string().min(1, "This field is required"),
});

type ContactFormType = z.infer<typeof contactFormSchema>;
export const ContactForm = () => {
  const inquiryOptions = [
    "General Inquiry",
    "Motors",
    "Technologies",
    "Mobility",
    "Beverages",
    "Medicine & Foods",
    "Farms",
  ];
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });
  const inquiryType = watch("inquiryTypeField");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownClicked(false);
      }
    };

    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && dropdownClicked) {
        setDropdownClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keyup", handleEscPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keyup", handleEscPress);
    };
  }, [dropdownClicked]);

  const submitForm: SubmitHandler<ContactFormType> = (data) => {};

  return (
    <section className="mt-15 mb-32 bg-black/5 px-10 py-8 backdrop-blur-sm max-[900px]:px-6 max-[900px]:py-6 max-[541px]:mt-10 max-[541px]:mb-24 max-[541px]:px-5 max-[541px]:py-5">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/45">
        get in touch
      </p>

      <h2 className="mt-5 hidden max-w-xl text-4xl font-black leading-none max-[1050px]:block max-[541px]:text-3xl">
        Start the conversation
      </h2>

      <div className="mt-6 grid grid-cols-[0.9fr_1.1fr] gap-12 max-[1050px]:min-h-0 max-[1050px]:grid-cols-1 max-[1050px]:gap-8">
        <aside className="flex flex-col justify-between max-[1050px]:order-last">
          <div>
            <h2 className="max-w-xl text-5xl font-black leading-none max-[1050px]:hidden">
              Start the conversation
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-black/68 max-[541px]:mt-4 max-[541px]:text-base">
              Whether this is a partnership conversation, a business enquiry, or
              a support request, share a few details and we&apos;ll connect you
              to the right team.
            </p>

            <div className="mt-8 grid gap-5 max-[541px]:mt-6 max-[541px]:gap-4">
              <div className="border-b border-black/10 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                  Email
                </p>
                <p className="mt-2 wrap-break-word text-base tracking-[0.12em] text-black/85">
                  leonwokedichisom@gmail.com
                </p>
              </div>

              <div className="border-b border-black/10 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                  Phone
                </p>
                <p className="mt-2 text-base tracking-[0.12em] text-black/85">
                  +234-911-230-0214
                </p>
              </div>

              <div className="border-b border-black/10 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                  Headquarters
                </p>
                <p className="mt-2 max-w-sm text-base leading-relaxed text-black/85">
                  267 Westwood Crescent, Richmond BV V&amp;C 2P9, Canada
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 max-[1050px]:mt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
              Follow us
            </p>
            <div className="mt-4 flex gap-3 text-lg">
              <Link
                href="#"
                aria-label="Facebook"
                className="inline-flex size-11 items-center justify-center border border-black/10 text-black/72"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="inline-flex size-11 items-center justify-center border border-black/10 text-black/72"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="inline-flex size-11 items-center justify-center border border-black/10 text-black/72"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </aside>

        <form
          className="max-[1050px]:order-first max-[1050px]:max-w-none border bg-white/40 border-black/8 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.05)] max-[900px]:p-6 max-[541px]:p-5"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="flex h-full flex-col gap-y-8 max-[541px]:gap-y-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
                Send a message
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-black/62">
                Complete the form below and we&apos;ll get back to you with the
                right next step.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-7 max-[700px]:grid-cols-1">
              <div className="flex flex-col gap-3 max-[1050px]:gap-0">
                <label
                  htmlFor="full-name-input"
                  className="text-sm font-medium uppercase tracking-[0.2em] text-black/65"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name-input"
                  placeholder="Enter your full name"
                  className={`border-b border-black/20 bg-transparent px-0 py-3 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-red-700 focus:outline-none ${errors.fullNameField ? "border-red-500" : ""}`}
                  {...register("fullNameField")}
                />
                {errors.fullNameField && (
                  <p className="text-red-500 text-xs -mt-1">
                    {errors.fullNameField.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 max-[1050px]:gap-0">
                <label
                  htmlFor="email-field"
                  className="text-sm font-medium uppercase tracking-[0.2em] text-black/65"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email-field"
                  placeholder="Enter your email address"
                  className={`border-b border-black/20 bg-transparent px-0 py-3 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-red-700 focus:outline-none ${errors.emailField ? "border-red-500" : ""}`}
                  {...register("emailField")}
                />
                {errors.emailField && (
                  <p className="text-red-500 text-xs -mt-1">
                    {errors.emailField.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-7 max-[700px]:grid-cols-1">
              <div className="flex flex-col gap-3 max-[1050px]:gap-0">
                <label
                  htmlFor="inquire_type-field"
                  className="text-sm font-medium uppercase tracking-[0.2em] text-black/65"
                >
                  Inquiry Type
                </label>
                <div ref={dropdownRef} className="relative">
                  <input type="hidden" {...register("inquiryTypeField")} />
                  <button
                    type="button"
                    id="inquire_type-field"
                    aria-haspopup="listbox"
                    aria-expanded={dropdownClicked}
                    onClick={() => setDropdownClicked((prev) => !prev)}
                    className={`flex w-full items-center justify-between border-b border-black/20 bg-transparent px-0 py-3 text-left text-base text-black transition-colors duration-300 hover:border-red-700 focus:border-red-700 focus:outline-none ${errors.inquiryTypeField ? "border-red-500" : ""}`}
                  >
                    <span
                      className={inquiryType ? "text-black" : "text-black/35"}
                    >
                      {inquiryType || "Tell us what this is about"}
                    </span>
                    <FaChevronDown className="text-sm text-black/25" />
                  </button>
                  <AnimatePresence>
                    {dropdownClicked && (
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
                          {inquiryOptions.map((option) => (
                            <li key={option}>
                              <button
                                className="w-full px-3 py-2 text-left hover:bg-gray-300 outline-none focus:bg-gray-300 caret-transparent"
                                type="button"
                                onClick={() => {
                                  setValue("inquiryTypeField", option, {
                                    shouldDirty: true,
                                    shouldTouch: true,
                                  });
                                  trigger("inquiryTypeField");
                                  setDropdownClicked(false);
                                }}
                              >
                                {option}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {errors.inquiryTypeField && (
                  <p className="text-red-500 text-xs -mt-1">
                    {errors.inquiryTypeField.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 max-[1050px]:gap-0">
                <label
                  htmlFor="phone_number-field"
                  className="text-sm font-medium uppercase tracking-[0.2em] text-black/65"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone_number-field"
                  placeholder="Enter your number"
                  inputMode="tel"
                  className={`border-b border-black/20 bg-transparent px-0 py-3 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-red-700 focus:outline-none ${errors.phoneNumberField ? "border-red-500" : ""}`}
                  {...register("phoneNumberField")}
                />
                {errors.phoneNumberField && (
                  <p className="text-red-500 text-xs -mt-1">
                    {errors.phoneNumberField.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3">
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
                className={`min-h-40 flex-1 resize-none border-b border-black/20 bg-transparent px-0 py-3 text-base text-black placeholder:text-black/35 transition-colors duration-300 focus:border-red-700 focus:outline-none ${errors.messageTextarea ? "border-red-500" : ""}`}
                {...register("messageTextarea")}
              />
              {errors.messageTextarea && (
                <p className="text-red-500 text-xs -mt-1">
                  {errors.messageTextarea.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 max-[541px]:flex-col max-[541px]:items-start">
              <p className="max-w-xs text-xs leading-relaxed text-black/48">
                By sending this message, you&apos;re taking the fastest route to
                the right conversation.
              </p>
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center gap-3 bg-red-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:translate-x-1 hover:bg-black"
              >
                Send Message
                <HiOutlineArrowLongRight className="text-lg" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
