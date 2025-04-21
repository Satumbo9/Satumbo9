"use client";

import React, { useState } from "react";
import { NavLinks } from "@/lib/links";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-lg py-6 w-full flex justify-between items-center bg-transparent backdrop-blur-sm z-50  relative">
      {/* LOGO */}
      <div className="text-white font-extrabold text-2xl tracking-tight hover:text-pink-400 transition-colors">
        <Link href="#Home">Satumbo9</Link>
      </div>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden md:flex gap-8 text-zinc-300 font-medium">
        {NavLinks.map((item) => (
          <Link
            href={item.route}
            key={item.id}
            className="hover:text-pink-400 transition-colors duration-200"
          >
            {item.text}
          </Link>
        ))}
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* MOBILE NAV LINKS */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full flex flex-col items-center gap-6 bg-black/70 backdrop-blur-md py-6 text-zinc-300 font-medium md:hidden z-50">
          {NavLinks.map((item) => (
            <Link
              href={item.route}
              key={item.id}
              className="hover:text-pink-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
