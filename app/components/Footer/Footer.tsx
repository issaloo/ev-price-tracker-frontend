const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0">
      <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700" />
      <span className="my-3 block text-sm text-gray-500 text-center dark:text-gray-400">
        © 2023 {/* Update the above to be dynamic */}
        <a href="https://digestiblecontents.com/" className="hover:underline">
          DigestibleContents™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;

// TODO: left off here
