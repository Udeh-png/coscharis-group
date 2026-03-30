"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgClose, CgMenuLeft } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";

export const Navbar = () => {
  const [dropdownState, setDropDownState] = useState<"open" | "close">("close");
  return (
    <nav className="flex justify-between items-center gap-10">
      <Link
        href="/"
        className="relative w-20 h-10 max-[460px]:w-16 max-[460px]:h-8"
      >
        <Image src={"/logo.png"} alt="" fill sizes="" />
      </Link>
      <ul className="flex gap-10 uppercase text-[0.70rem] font-semibold items-center max-[955px]:hidden">
        <li>
          <div
            className="group relative"
            onMouseOver={() => setDropDownState("open")}
          >
            <div className="flex items-center gap-x-1 relative cursor-pointer">
              <p>companies</p>
              <FaChevronDown className="text-[0.60rem] group-hover:-rotate-180 transition-transform" />
            </div>

            <div className="absolute left-0 top-10 w-max opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:top-full group-hover:pointer-events-auto pt-3">
              <div className="bg-background-primary shadow rounded-md p-5 relative">
                <ul className="uppercase text-[0.70rem] font-semibold grid grid-cols-3 gap-x-15 gap-y-5">
                  <li className="py-2 will-change-transform">
                    <Link href={"/"}>motors</Link>
                  </li>
                  <li className="py-2 will-change-transform">
                    <Link href={"/"}>technologies</Link>
                  </li>
                  <li className="py-2 will-change-transform">
                    <Link href={"/"}>mobility</Link>
                  </li>
                  <div className="absolute right-1/3 w-px top-0 h-full opacity-10 py-5">
                    <div className="bg-black size-full" />
                  </div>
                  <li className="py-2 will-change-transform">
                    <Link href={"/"}>motor assembly</Link>
                  </li>
                  <li className="py-2 will-change-transform">
                    <Link href={"/"}>beverages</Link>
                  </li>
                  <li className="py-2 will-change-transform">
                    <Link href={"/"}>medicine & foods</Link>
                  </li>

                  <div className="absolute right-2/3 w-px top-0 h-full opacity-10 py-5">
                    <div className="bg-black size-full" />
                  </div>

                  <li className="py-2 will-change-transform">
                    <Link href={"/"}>farms</Link>
                  </li>
                  <li className="py-2 will-change-transform">
                    <Link href={"/"}>ghana</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <Link href={"/"}>about coscharis</Link>
        </li>

        <li>
          <Link href={"/"}>news & events</Link>
        </li>

        <li>
          <Link href={"/"}>investor relations</Link>
        </li>

        <li>
          <Link href={"/"}>leadership</Link>
        </li>

        <li>
          <Link
            href={"/contact-us"}
            className="bg-accent-primary text-white rounded-md px-4 py-2 block"
          >
            contact us
          </Link>
        </li>
      </ul>
      <label
        htmlFor="mobile-menu-checkbox"
        className="cursor-pointer text-3xl hidden max-[955px]:block"
      >
        <CgMenuLeft />
      </label>
      <input
        type="checkbox"
        id="mobile-menu-checkbox"
        className="peer"
        hidden
      />
      <label
        htmlFor="mobile-menu-checkbox"
        className="absolute transition-opacity duration-500 opacity-0 pointer-events-none peer-checked:opacity-20 peer-checked:pointer-events-auto inset-0 bg-black"
      />
      <div className="fixed p-5 inset-x-0 -top-[110%] h-screen peer-checked:top-0 transition-[top] duration-500 bg-background-primary">
        <div className="flex justify-between">
          <Link
            href="/"
            className="relative w-10 h-10 max-[460px]:w-16 max-[460px]:h-8 block"
          >
            <Image src={"/logo.png"} alt="" fill sizes="" />
          </Link>

          <label
            htmlFor="mobile-menu-checkbox"
            className="cursor-pointer text-3xl"
          >
            <CgClose />
          </label>
        </div>

        <ul className="uppercase text-sm font-semibold mt-10">
          <li className="py-4">
            <Link
              href={"/contact-us"}
              className="bg-accent-primary text-white rounded-md px-4 py-2 block w-max"
            >
              contact us
            </Link>
          </li>

          <li className="py-4">
            <div className="flex items-center gap-x-1">
              <p>companies</p>
              <FaChevronDown />
            </div>
          </li>

          <li className="py-4">
            <Link href={"/"}>about coscharis</Link>
          </li>

          <li className="py-4">
            <Link href={"/"}>news & events</Link>
          </li>

          <li className="py-4">
            <Link href={"/"}>investor relations</Link>
          </li>

          <li className="py-4">
            <Link href={"/"}>leadership</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
