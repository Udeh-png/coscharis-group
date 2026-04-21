"use client";

import Image from "next/image";
import Link from "next/link";
import { CgClose, CgMenuLeft } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="fixed z-10 inset-x-0 flex justify-between items-center gap-10 px-10 max-[541px]:px-5 text-background-primary">
      <Link
        href="/"
        className="relative w-20 h-10 max-[460px]:w-16 max-[460px]:h-8"
      >
        <Image src={"/images/logo.png"} alt="" fill sizes="" />
      </Link>
      <ul className="flex gap-10 uppercase text-[0.70rem] font-semibold items-center max-[955px]:hidden">
        <li>
          <div className="group relative">
            <div className="flex items-center gap-x-1 relative cursor-pointer">
              <p>companies</p>
              <FaChevronDown className="text-[0.60rem]" />
            </div>

            <div className="absolute left-0 top-10 w-max opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:top-full group-hover:pointer-events-auto pt-3">
              <div className="bg-background-primary text-black shadow rounded-md relative">
                <ul className="uppercase text-[0.70rem] font-semibold gap-y-2 flex flex-col p-5">
                  <li className="will-change-transform">
                    <Link
                      className="py-2 block size-full"
                      href={"/coscharis-motors"}
                    >
                      {/* TODO: add after element with bg of background-primary to each nav link that grows horizontally on hover */}
                      motors
                    </Link>
                  </li>
                  <li className="will-change-transform">
                    <Link className="py-2 block size-full" href={"/"}>
                      technologies
                    </Link>
                  </li>
                  <li className="will-change-transform">
                    <Link className="py-2 block size-full" href={"/"}>
                      mobility
                    </Link>
                  </li>
                  <li className="will-change-transform">
                    <Link className="py-2 block size-full" href={"/"}>
                      motor assembly
                    </Link>
                  </li>
                  <li className="will-change-transform">
                    <Link className="py-2 block size-full" href={"/"}>
                      beverages
                    </Link>
                  </li>
                  <li className="will-change-transform">
                    <Link className="py-2 block size-full" href={"/"}>
                      medicine & foods
                    </Link>
                  </li>
                  <li className="will-change-transform">
                    <Link className="py-2 block size-full" href={"/"}>
                      farms
                    </Link>
                  </li>
                  <li className="will-change-transform">
                    <Link className="py-2 block size-full" href={"/"}>
                      ghana
                    </Link>
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
            <Image src={"/images/logo.png"} alt="" fill sizes="" />
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
