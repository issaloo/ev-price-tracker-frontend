import { Typography } from "@mui/material";
import CardPage from "../components/Card/CardPage";
import CardQA from "../components/Card/CardQA";
import qaObjectList from "./qaObjectList.json";

// Enhancement: QA can be json object in database or just store in the frontend
export default function Usage() {
  // const s
  return (
    <CardPage>
      <Typography variant="h5" className="mb-2">
        Frequently Asked Questions
      </Typography>
      {qaObjectList.map((qaObject: any) => {
        return <CardQA key={qaObject.question} qaObject={qaObject} />;
      })}
      {/* <div className="mb-2">
        <Typography variant="h6">How do I use this website?</Typography>
        <Typography variant="body1"></Typography>
      </div>
      <Typography variant="h6">How often are the prices updated?</Typography>

      <Typography variant="h6">How do I use this website?</Typography>
      <Typography variant="h6">How do I use this website?</Typography>
      <Typography variant="h6">How do I use this website?</Typography>
      <Typography variant="body1" className="mb-4">
        Can I receive notifications when a car price drops to my desired level?
        How accurate is the price tracking information provided by the website?
        Can I track prices for products in different currencies or regions?
      </Typography> */}
    </CardPage>
  );
}
