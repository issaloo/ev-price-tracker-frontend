import Logo from "public/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bottom-0 h-[140px] my-15 w-full px-4">
      <hr className="my-3 border-gray-200 dark:border-gray-700" />
      <Image
        src={Logo}
        alt="Digestible Contents Logo"
        className="mx-auto h-10 w-auto"
      />
      <p className="my-3 text-center text-sm text-slate-500">
        © 2023{" "}
        <a href="https://digestiblecontents.com/" className="hover:underline">
          DigestibleContents™
        </a>{" "}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

// TODO: left off here
// hr has dark and light mode
