import { Button, Typography } from "@mui/material";
import { notFound } from "next/navigation";

import CurrentBox from "../../components/Graph/CurrentBox";
import StatisticsBox from "../../components/Graph/StatisticsBox";
import TimeSeriesChart from "../../components/Graph/TimeSeriesChart";
import { getGraphData } from "../../hooks/getGraphData";

async function Graph({ params }: { params: { slug: string } }) {
  const graphData = await getGraphData(params.slug.replace(/-/g, "_"));
  if (!graphData) {
    return notFound();
  }
  // Add Tool Tip to YTD
  // Add typescripts to hooks
  // Add page for filtering to a desired card type, order by price
  // Add dark mode
  // Add pop-up instead of plain text for instructions
  return (
    <div className="flex flex-col">
      <div className="md:mx-36 mx-4">
        <div className="flex flex-row justify-between my-5">
          <div className="flex flex-col">
            <Typography
              variant="h6"
              className="font-bold uppercase text-slate-500"
            >
              {graphData.brandName}
            </Typography>
            <Typography
              variant="h4"
              className={`font-medium ${
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
            title="Highest YTD"
            isDollar={true}
          />
          <StatisticsBox
            statsData={graphData.minPriceYTD}
            title="Lowest YTD"
            isDollar={true}
          />
          <StatisticsBox
            statsData={graphData.avgPriceYTD}
            title="Average YTD"
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
            title="Changes YTD"
            isDollar={false}
          />
        </div>
        <div>
          <TimeSeriesChart
            graphData={graphData.graphData}
            title="Price Trend YTD"
          />
        </div>
      </div>
    </div>
  );
}

export default Graph;
