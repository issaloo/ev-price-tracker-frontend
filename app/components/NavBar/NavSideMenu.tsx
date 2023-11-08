"use client";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
// import NavSideLink from "./NavSideLink";
// Enhancement: use navObjectList
type NavSideMenuProps = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const NavSideMenu = ({ setMenuOpen }: NavSideMenuProps) => {
  return (
    <div className="flex-col py-4">
      <ul>
        <Link href="/">
          <li
            onClick={() => setMenuOpen(false)}
            className="py-4 cursor-pointer uppercase"
          >
            home
          </li>
        </Link>
        <Link href="/about">
          <li
            onClick={() => setMenuOpen(false)}
            className="py-4 cursor-pointer uppercase"
          >
            about
          </li>
        </Link>
        <Link href="/faq">
          <li
            onClick={() => setMenuOpen(false)}
            className="py-4 cursor-pointer uppercase"
          >
            faq
          </li>
        </Link>
        <Link href="/vehicles">
          <li
            onClick={() => setMenuOpen(false)}
            className="py-4 cursor-pointer uppercase"
          >
            vehicles
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavSideMenu;
