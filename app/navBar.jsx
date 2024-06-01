"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ContactButton from "@/components/contactButton";

export const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <div className="py-10 flex flex-col items-center px-10 justify-center text-center space-y-5 border-t-2  border-greenCustom z-10  w-full h-full bg-black  lg:hidden">
      <ul class="flex flex-col  md:p-0 mt-4  bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 slg:hidden lg:block lg:flex lg:items-center lg:w-auto lg:justify-end space-y-2">
        <li className="h-10">
          <a href="/" class="block py-2 px-3 text-gray-900  md:p-0 ">
            <button
              className={`bg-black border-2 border-greenCustom  p-2 w-20 rounded-lg text-sm text-white ${
                pathname === "/" ? "bg-greenButtons" : ""
              }`}
            >
              Home
            </button>
          </a>
        </li>
        <li>
          <a href="/services" class="block py-2 px-3 text-gray-900  md:p-0 ">
            <button
              className={`bg-black border-2 border-greenCustom p-2 w-20 rounded-lg text-sm text-white ${
                pathname === "/services" ? "bg-greenButtons" : ""
              }`}
            >
              Services
            </button>
          </a>
        </li>
        <li>
          <a href="/reviews" class=" py-2 px-3 text-gray-900  md:p-0 ">
            <button
              className={`bg-black border-2 border-greenCustom  p-2 w-20 rounded-lg text-sm text-white ${
                pathname === "/reviews" ? "bg-greenButtons" : ""
              }`}
            >
              Reviews
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export const FooterMenu = () => {
  const pathname = usePathname();
  return (
    <>
      {" "}
      <div className="py-10  items-center px-10 justify-center text-center space-y-5  w-full h-full bg-black  ">
        <ul class="  md:p-0 mt-4  bg-gray-50 md:space-x-8 space-y-2 mx-2">
          <li></li>{" "}
          <li>
            <a href="/" class="block py-2 px-3 text-gray-900  md:p-0 ">
              <button
                className={`bg-black border-2 border-greenCustom  p-2  text-2xl text-white w-full ${
                  pathname === "/" ? "bg-greenButtons" : ""
                }`}
              >
                Home
              </button>
            </a>
          </li>
          <li>
            <a href="/services" class="block py-2 px-3 text-gray-900  md:p-0 ">
              <button
                className={`bg-black border-2 border-greenCustom  p-2  text-2xl text-white w-full ${
                  pathname === "/services" ? "bg-greenButtons" : ""
                }`}
              >
                Services
              </button>
            </a>
          </li>
          <li>
            <a href="/reviews" class="block py-2 px-3 text-gray-900  md:p-0 ">
              <button
                className={`bg-black border-2 border-greenCustom  p-2  text-2xl text-white w-full ${
                  pathname === "/reviews" ? "bg-greenButtons" : ""
                }`}
              >
                Reviews
              </button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(true);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <nav class="px-5 md:px-10 bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="bg-black max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src="logo.svg" width={80} height={24} alt="Flowbite Logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ContactButton>
            <button
              href="#contact_us"
              type="button"
              className="text-black   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center  bg-redishWhite hover:bg-greenCustom hover:text-white "
            >
              Contact Us
            </button>
          </ContactButton>

          <button
            onClick={toggleMobileMenu}
            type="button"
            class="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col  md:p-0 mt-4  bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 slg:hidden lg:block lg:flex lg:items-center lg:w-auto lg:justify-end">
            <li className="h-10">
              <a href="/" class="block py-2 px-3 text-gray-900  md:p-0 ">
                <button
                  className={`bg-black border-2 border-greenCustom  p-2 w-20 rounded-lg text-sm text-white ${
                    pathname === "/" ? "bg-greenButtons" : ""
                  }`}
                >
                  Home
                </button>
              </a>
            </li>
            <li>
              <a
                href="/services"
                class="block py-2 px-3 text-gray-900  md:p-0 "
              >
                <button
                  className={`bg-black border-2 border-greenCustom p-2 w-20 rounded-lg text-sm text-white ${
                    pathname === "/services" ? "bg-greenButtons" : ""
                  }`}
                >
                  Services
                </button>
              </a>
            </li>
            <li>
              <a href="/reviews" class=" py-2 px-3 text-gray-900  md:p-0 ">
                <button
                  className={`bg-black border-2 border-greenCustom  p-2 w-20 rounded-lg text-sm text-white ${
                    pathname === "/reviews" ? "bg-greenButtons" : ""
                  }`}
                >
                  Reviews
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>{" "}
      {showMobileMenu && <MobileMenu />}
    </nav>
  );
};

export default NavBar;
