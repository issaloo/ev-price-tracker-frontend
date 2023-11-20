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
  // const modelName = graphData.modelName;
  // const brandName = graphData.brandName;
  // const modelUrl = graphData.modelUrl;
  // const curPrice = graphData.curPrice;
  // const avgPriceYTD = graphData.avgPriceYTD;
  // const minPriceYTD = graphData.minPriceYTD;
  // const maxPriceYTD = graphData.maxPriceYTD;
  // const minPrice = graphData.minPrice;
  // const maxPrice = graphData.maxPrice;
  // const changeYTD = graphData.changeYTD;
  // const graphDataXY = graphData.graphData;

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
          <div className="h-full align-center">
            <Button
              size="small"
              variant="contained"
              className="capitalize"
              href={graphData.modelUrl}
            >
              See Car Website
            </Button>
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
            title="Price Trend (YTD)"
          />
        </div>
      </div>
    </div>
  );
}

export default Graph;
