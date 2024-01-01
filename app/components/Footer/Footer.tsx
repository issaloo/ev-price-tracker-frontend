import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full px-4 my-6">
      <hr className="my-3 border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center mb-1 space-x-4">
          <Link
            href="/privacy"
            className="text-sm hover:underline text-slate-600"
          >
            Privacy Policy
          </Link>
          <Link
            href="/disclaimer"
            className="text-sm hover:underline text-slate-600"
          >
            Disclaimer
          </Link>
        </div>
        <p className="my-3 text-sm text-slate-500">
          © {new Date().getFullYear()} DigestibleContents™ All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
