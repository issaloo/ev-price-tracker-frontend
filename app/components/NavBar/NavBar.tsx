"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import NavSideMenu from "./NavSideMenu";
import NavBarLink from "./NavBarLink";
import navObjectList from "./navObjectList.json";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 w-full py-3 h-24 shadow-xl bg-white z-50">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image src={Logo} alt="Logo" height="60" className="cursor-pointer" />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            {navObjectList.map((navObject: any) => {
              return (
                <NavBarLink key={navObject.pageName} navObject={navObject} />
              );
            })}
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-100 p-10 ease-in duration-300"
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
