import { Typography } from "@mui/material";
import Link from "next/link";

import CardPage from "../components/Card/CardPage";
import CardQA from "../components/Card/CardQA";

import privacyObjectList from "./privacyObjectList.json";

export const metadata = {
  title: "EV Price Tracker | Privacy Policy",
  description:
    "Review our Privacy Policy to understand how we handle your data on evpricetracker.com. Learn about data protection, usage, and your rights. Ensure transparency and trust in your online experience with our privacy commitment.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function About() {
  return (
    <CardPage>
      <Typography variant="h5" className="mb-2 text-black dark:text-slate-200">
        Privacy Policy
      </Typography>
      <Typography
        variant="body1"
        className="mb-2 text-black dark:text-slate-400"
      >
        Last Updated: 2023-11-14
        <br />
        <br />
        This Privacy Policy explains how we collect, use, and disclose
        information obtained through the use of advertisements served on our
        website, particularly through third-party vendors such as Google
        AdSense.
      </Typography>

      {privacyObjectList.map((qaObject: any) => {
        return <CardQA key={qaObject.question} qaObject={qaObject} />;
      })}
      <Typography variant="body1" className="text-black dark:text-slate-400">
        If you have any questions or concerns regarding this Privacy Policy,
        please contact us at{" "}
        <Link
          href="mailto:digestiblecontents@gmail.com"
          className="hover:underline text-blue-600"
        >
          digestiblecontents@gmail.com
        </Link>
        .
        <br />
        <br />
        By using our website, you agree to the terms of this Privacy Policy. If
        you do not agree with these terms, please do not use our website.
      </Typography>
    </CardPage>
  );
}
