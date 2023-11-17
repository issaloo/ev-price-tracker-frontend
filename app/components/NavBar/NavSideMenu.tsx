"use client";
import { Dispatch, SetStateAction } from "react";

import navObjectList from "./navObjectList.json";
import NavSideLink from "./NavSideLink";

type NavSideMenuProps = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const NavSideMenu = ({ setMenuOpen }: NavSideMenuProps) => {
  return (
    <div className="flex-col py-4">
      <ul>
        {navObjectList.map((navObject: any) => {
          return (
            <NavSideLink
              key={navObject.pageName}
              setMenuOpen={setMenuOpen}
              navObject={navObject}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default NavSideMenu;
