"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import NavSideMenu from "./NavSideMenu";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../DarkMode/MoonIcon";
import { SunIcon } from "../DarkMode/SunIcon";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 w-full h-24 shadow-xl bg-white z-50">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="100"
            height="60"
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">About</li>
            </Link>
            <Link href="/graphs">
              <li className="ml-10 uppercase hover:border-b text-xl">Graphs</li>
            </Link>
          </ul>
          {/* work on this */}
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          ></Switch>
          {/* work on this */}
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <NavSideMenu setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
