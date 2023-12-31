"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.png";

import { ThemeSwitcher } from "../DarkMode/ThemeSwitcher";

import NavBarLink from "./NavBarLink";
import navObjectList from "./navObjectList.json";
import NavSideMenu from "./NavSideMenu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 w-full h-24 shadow-xl bg-white dark:bg-slate-700 backdrop-blur-md bg-opacity-60 dark:bg-opacity-60 z-50 backdrop-filter ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="flex flex-row">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              height="60"
              className="cursor-pointer"
            />
          </Link>
          <ThemeSwitcher />
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            {navObjectList.map((navObject: any) => {
              return (
                <NavBarLink key={navObject.pageName} navObject={navObject} />
              );
            })}
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer pl-24 flex flex-row space-x-5"
        >
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-100 dark:bg-slate-600 ease-in duration-300 py-10 px-10"
              : "fixed left-[-100%] top-0 ease-in h-screen duration-300 py-10 px-10"
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
