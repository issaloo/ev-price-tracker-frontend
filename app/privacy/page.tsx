import { Typography } from "@mui/material";
import Link from "next/link";

import CardPage from "../components/Card/CardPage";
import CardQA from "../components/Card/CardQA";

import privacyObjectList from "./privacyObjectList.json";

export default function About() {
  return (
    <CardPage>
      <Typography variant="h5" className="mb-2">
        Privacy Policy
      </Typography>
      <Typography variant="body1" className="mb-2">
        Last Updated: 2023-11-14
        <br />
        <br />
        This Privacy Policy explains how we collect, use, and disclose
        information obtained through the use of advertisements served on our
        website, particularly through third-party vendors such as Google
        AdSense. By accessing or using our website, you consent to the terms
        outlined in this Privacy Policy.
      </Typography>

      {privacyObjectList.map((qaObject: any) => {
        return <CardQA key={qaObject.question} qaObject={qaObject} />;
      })}
      <Typography variant="body1">
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
