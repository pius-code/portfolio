"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import MenuOverlay from "./MenuOverlay";

const navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contacts",
    path: "#contacts",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#010101e4] h-20 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="flex flex-wrap items-center justify-between mx-auto  ">
        <Link href={"/"} className="text-5xl text-[#85b7b8] font-semibold m-4">
          PIUS
        </Link>
        <div className="mobile-menu flex justify-center items-center bg-white md:hidden w-10 h-10 mr-7 ">
          {!navbar ? (
            <button
              className="flex items-center justify-center"
              onClick={() => setNavbar(true)}
            >
              <MenuIcon className="size-9" />
            </button>
          ) : (
            <button
              className="flex items-center justify-center"
              onClick={() => setNavbar(false)}
            >
              <XIcon className="size-9 flex justify-center items-center" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto lg:block " id="navbar">
          <ul className="md:flex flex-row md:space-x-8 lg:flex  lg:space-x-8">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbar ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  );
};

export default Navbar;
