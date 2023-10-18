import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

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
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            onClick={() => setMenuOpen(false)}
            className="py-4 cursor-pointer uppercase"
          >
            About
          </li>
        </Link>
        <Link href="/graphs">
          <li
            onClick={() => setMenuOpen(false)}
            className="py-4 cursor-pointer uppercase"
          >
            Graphs
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavSideMenu;
