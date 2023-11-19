import { Typography } from "@mui/material";
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
  const brandName = "rivian";
  const modelName = "R1T";
  const curPrice = 75000;
  const avgPriceYTD = 80000;
  const minPriceYTD = 75000;
  const maxPriceYTD = 90000;
  const changeYTD = 25;
  const minPrice = 75000;
  const maxPrice = 90000;
  // ADD TOOL TIP TO YTD
  return (
    <div className="flex flex-col">
      <div className="md:mx-36 mx-4">
        <div className="my-5">
          <Typography
            variant="h6"
            className="font-bold uppercase text-slate-500"
          >
            {brandName}
          </Typography>
          <Typography
            variant="h4"
            className={`font-medium ${
              modelName.indexOf(" ") >= 0 ? "capitalize" : "uppercase"
            }`}
          >
            {modelName}
          </Typography>
        </div>
        <div className="flex flex-row mb-3 justify-center">
          <CurrentBox
            currentData={curPrice}
            title="Current Price"
            isDollar={true}
          />
        </div>
        <div className="flex flex-row justify-between mb-3 md:space-x-5 space-x-2">
          <StatisticsBox
            statsData={maxPriceYTD}
            title="Max Price (YTD)"
            isDollar={true}
          />
          <StatisticsBox
            statsData={minPriceYTD}
            title="Min Price (YTD)"
            isDollar={true}
          />
          <StatisticsBox
            statsData={avgPriceYTD}
            title="Avg Price (YTD)"
            isDollar={true}
          />
        </div>
        <div className="flex flex-row justify-between mb-3 md:space-x-5 space-x-2">
          <StatisticsBox
            statsData={changeYTD}
            title="Changes (YTD)"
            isDollar={false}
          />
          <StatisticsBox
            statsData={minPrice}
            title="Lowest Ever"
            isDollar={true}
          />
          <StatisticsBox
            statsData={maxPrice}
            title="Highest Ever"
            isDollar={true}
          />
        </div>
        <div>
          <TimeSeriesChart graphData={graphData} title="Price Trend (YTD)" />
        </div>
      </div>
    </div>
  );
}

export default Graph;
