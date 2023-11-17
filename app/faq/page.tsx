import { Typography } from "@mui/material";

import CardPage from "../components/Card/CardPage";
import CardQA from "../components/Card/CardQA";

import qaObjectList from "./qaObjectList.json";

function Usage() {
  return (
    <CardPage>
      <Typography variant="h5" className="mb-2">
        Frequently Asked Questions
      </Typography>
      {qaObjectList.map((qaObject: any) => {
        return <CardQA key={qaObject.question} qaObject={qaObject} />;
      })}
    </CardPage>
  );
}

export default Usage;
