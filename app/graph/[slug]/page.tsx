import TimeSeriesChart from "../../components/Graph/TimeSeriesChart";
import { getGraphData } from "../../hooks/getGraphData";

export default async function Graph({ params }: { params: { slug: string } }) {
  // TODO: update here
  const graphData = await getGraphData("tesla_model_3");

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row mt-2">
        <h4 className="ml-4 text-4xl font-bold capitalize">{params.slug}</h4>
        <TimeSeriesChart data={graphData}></TimeSeriesChart>
      </div>
    </div>
  );
  // how to prevent this from any slug to create a page. this could be endless
}
