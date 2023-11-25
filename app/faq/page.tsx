import { Typography } from "@mui/material";

import CardPage from "../components/Card/CardPage";
import CardQA from "../components/Card/CardQA";

import qaObjectList from "./qaObjectList.json";

export const metadata = {
  title: "EV Price Tracker | FAQ",
  description:
    "Get quick answers to common questions about evpricetracker.com in our Frequently Asked Questions (FAQ) section. ",
  icons: {
    icon: "/favicon.png",
  },
};

function Usage() {
  return (
    <CardPage>
      <Typography variant="h5" className="mb-2 text-black dark:text-slate-200">
        Frequently Asked Questions
      </Typography>
      {qaObjectList.map((qaObject: any) => {
        return <CardQA key={qaObject.question} qaObject={qaObject} />;
      })}
    </CardPage>
  );
}

export default Usage;
