import TimeSeriesChart from "../../components/Graph/TimeSeriesChart";
import { getGraphData } from "../../hooks/getGraphData";

export default async function Graph({ params }: { params: { slug: string } }) {
  // TODO: update here
  const graphData = await getGraphData("tesla_model_3");

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-center items-start">
        <div className="sm:w-5/6 w-11/12 mt-5">
          <h4
            className={`ml-4 text-4xl font-bold ${
              params.slug.indexOf("-") >= 0 ? "capitalize" : "uppercase"
            }`}
          >
            {params.slug.replace("-", " ")}
          </h4>
          <TimeSeriesChart data={graphData}></TimeSeriesChart>
          {/* Add referral https://www.tesla.com/referral/issac66626 */}
        </div>
      </div>
    </div>
  );
  // how to prevent this from any slug to create a page. this could be endless
}
