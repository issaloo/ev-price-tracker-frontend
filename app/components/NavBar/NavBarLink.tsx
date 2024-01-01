import Link from "next/link";

const NavBarLink = ({ navObject }: { navObject: any }) => {
  return (
    <Link href={`${navObject.pageRoute}`}>
      <li className="ml-4 uppercase hover:border-b text-md">
        {navObject.pageName}
      </li>
    </Link>
  );
};

export default NavBarLink;
