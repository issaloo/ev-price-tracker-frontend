import { Typography } from "@mui/material";
import { notFound } from "next/navigation";

import StatisticsBox from "../../components/Graph/StatisticsBox";
import TimeSeriesChart from "../../components/Graph/TimeSeriesChart";
import { getGraphData } from "../../hooks/getGraphData";

async function Graph({ params }: { params: { slug: string } }) {
  const graphData = await getGraphData(params.slug.replace(/-/g, "_"));
  if (!graphData) {
    return notFound();
  }
  const averageValue = "80000";
  const minValue = "75000";
  const maxValue = "90000";
  const changeValue = "25";

  return (
    <div className="flex flex-col">
      <div className="sm:mx-36 mx-2">
        <Typography variant="h4" className="font-bold uppercase my-5">
          {params.slug.replace(/-/g, " ")}
        </Typography>
        <div className="flex flex-row justify-between mb-6">
          <StatisticsBox data={maxValue} title="Max Price" />
          <StatisticsBox data={minValue} title="Min Price" />
          <StatisticsBox data={averageValue} title="Avg Price" />
          <StatisticsBox data={changeValue} title="Price Changes" />
        </div>
        <div>
          <TimeSeriesChart data={graphData} />
        </div>
      </div>
    </div>
  );
}

export default Graph;
