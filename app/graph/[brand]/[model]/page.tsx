import { Button, Typography } from "@mui/material";
import { notFound } from "next/navigation";

import { GraphParams } from "../../..//types/graphParams";
import CurrentBox from "../../../components/Graph/CurrentBox";
import StatisticsBox from "../../../components/Graph/StatisticsBox";
import TimeSeriesChart from "../../../components/Graph/TimeSeriesChart";
import { getGraphData } from "../../../hooks/getGraphData";

export async function generateMetadata({ params }: { params: GraphParams }) {
  const brandParams = params.brand.replace(/-/g, " ").split(" ");
  const brandName = brandParams
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  const modelParams = params.model.replace(/-/g, " ").split(" ");
  const modelName = modelParams
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  return {
    title: `EV Price Tracker | ${brandName} - ${modelName}`,
    description: `Explore the dynamic pricing trends and key statistics of the ${brandName} ${modelName} over time. Dive into historical data to track price fluctuations and gain valuable insights into this electric vehicle.`,
    icons: {
      icon: "/favicon.png",
    },
  };
}

async function Graph({ params }: { params: GraphParams }) {
  const graphKey = `${params.brand.replace(/-/g, "_")}_${params.model.replace(
    /-/g,
    "_",
  )}`;
  const graphData = await getGraphData(graphKey);
  if (!graphData) {
    return notFound();
  }
  // Add typescripts to hooks
  // Add pop-up instead of plain text for instructions
  // Left off here
  return (
    <div className="flex flex-col">
      <div className="md:mx-36 mx-4">
        <div className="flex flex-row justify-between my-5">
          <div className="flex flex-col">
            <Typography
              variant="h6"
              className="font-bold uppercase text-slate-500 dark:text-slate-300"
            >
              {graphData.brandName}
            </Typography>
            <Typography
              variant="h4"
              className={`font-medium text-black dark:text-white ${
                graphData.modelName.indexOf(" ") >= 0
                  ? "capitalize"
                  : "uppercase"
              }`}
            >
              {graphData.modelName}
            </Typography>
          </div>
          <div className="flex flex-col h-full align-center space-y-1">
            <Button
              size="small"
              variant="contained"
              className="capitalize"
              color="secondary"
              href={graphData.modelUrl}
            >
              see car website
            </Button>
            {graphData.modelUrl.includes("tesla") && (
              <Button
                size="small"
                variant="contained"
                className="capitalize"
                href="https://www.tesla.com/referral/issac66626"
              >
                tesla referral
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-row mb-3 justify-center">
          <CurrentBox
            currentData={graphData.curPrice}
            title="Current Price"
            isDollar={true}
          />
        </div>
        <div className="flex flex-row justify-between mb-3 md:space-x-5 space-x-3">
          <StatisticsBox
            statsData={graphData.maxPriceYTD}
            title="Highest YTD*"
            isDollar={true}
          />
          <StatisticsBox
            statsData={graphData.minPriceYTD}
            title="Lowest YTD*"
            isDollar={true}
          />
          <StatisticsBox
            statsData={graphData.avgPriceYTD}
            title="Average YTD*"
            isDollar={true}
          />
        </div>
        <div className="flex flex-row justify-between mb-3 md:space-x-5 space-x-3">
          <StatisticsBox
            statsData={graphData.maxPrice}
            title="Highest Ever"
            isDollar={true}
          />
          <StatisticsBox
            statsData={graphData.minPrice}
            title="Lowest Ever"
            isDollar={true}
          />
          <StatisticsBox
            statsData={graphData.changeYTD}
            title="Changes YTD*"
            isDollar={false}
          />
        </div>
        <div>
          <TimeSeriesChart
            graphData={graphData.graphData}
            title="Price Trend YTD*"
          />
        </div>
        <div>
          <Typography variant="caption" color="gray">
            *Year to Date (YTD) refers to the trailing 12 months to the present
            date
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Graph;
