import { Card, CardContent } from "@mui/material";

import FieldEstimator from "../components/Field/FieldEstimator";

export const metadata = {
  title: "EV Price Tracker | Vehicle Cost Estimator",
  description:
    "Easily calculate the total cost of your next EV purchase, including sales tax and rebates, with our comprehensive online Cost Estimator tool.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Estimator() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-center">
        <div className="sm:w-[620px] w-[450px] mx-6">
          <h4 className="mt-6 ml-2 text-4xl font-bold capitalize">
            EV Cost Estimator
          </h4>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-row justify-center">
          <Card className="mt-8 sm:w-[620px] w-[450px] mx-6 bg-white dark:bg-slate-300">
            <CardContent>
              <FieldEstimator />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
