import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type NavSideLinkProps = {
  navObject: any;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const NavSideLink = ({ navObject, setMenuOpen }: NavSideLinkProps) => {
  return (
    <Link href={`${navObject.pageRoute}`}>
      <li
        onClick={() => setMenuOpen(false)}
        className="py-4 cursor-pointer uppercase"
      >
        {navObject.pageName}
      </li>
    </Link>
  );
};

export default NavSideLink;
