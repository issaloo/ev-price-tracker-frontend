import TimeSeriesChart from "../../components/Graph/TimeSeriesChart";
import { getGraphData } from "../../hooks/getGraphData";
import { notFound } from "next/navigation";

async function Graph({ params }: { params: { slug: string } }) {
  const graphData = await getGraphData(params.slug.replace(/-/g, "_"));
  if (!graphData) {
    return notFound();
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-center items-start">
        <div className="sm:w-5/6 w-11/12 mt-5">
          <h4 className="ml-4 text-4xl font-bold uppercase">
            {params.slug.replace(/-/g, " ")}
          </h4>
          <TimeSeriesChart data={graphData}></TimeSeriesChart>
        </div>
      </div>
    </div>
  );
}

export default Graph;
