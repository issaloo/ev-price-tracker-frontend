import { Typography } from "@mui/material";

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
        This Privacy Policy outlines how DigestibleContents collects, uses, and
        protects user information on the EV Price Tracker website.
      </Typography>

      {privacyObjectList.map((qaObject: any) => {
        return <CardQA key={qaObject.question} qaObject={qaObject} />;
      })}
      <Typography variant="body1">
        By using our site, you agree to this policy. Please review it
        periodically for updates.
      </Typography>
    </CardPage>
  );
}
