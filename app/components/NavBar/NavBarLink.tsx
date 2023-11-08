import Link from "next/link";

const NavBarLink = ({ navObject }: { navObject: any }) => {
  return (
    <Link href={`${navObject.pageRoute}`}>
      <li className="ml-10 uppercase hover:border-b text-xl">
        {navObject.pageName}
      </li>
    </Link>
  );
};

export default NavBarLink;
