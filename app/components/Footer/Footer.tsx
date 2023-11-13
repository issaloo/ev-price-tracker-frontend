import Image from "next/image";
import Logo from "public/Logo.png";

const Footer = () => {
  return (
    <footer className="bottom-0 my-15 w-full px-4">
      <hr className="my-3 border-gray-200 dark:border-gray-700" />
      <Image
        src={Logo}
        alt="Digestible Contents Logo"
        className="mx-auto h-10 w-auto"
      />
      <p className="my-3 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} DigestibleContents™ All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
