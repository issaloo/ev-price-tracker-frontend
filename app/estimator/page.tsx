import CardPage from "../components/Card/CardPage";
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
    <div className="w-full flex flex-col justify-center items-center">
      <div className="sm:w-[620px] w-[450px] flex flex-row mt-6">
        <h4 className="w-full mx-6 text-4xl font-bold capitalize">
          EV Cost Estimator
        </h4>
      </div>
      <CardPage>
        <FieldEstimator />
      </CardPage>
    </div>
  );
}
