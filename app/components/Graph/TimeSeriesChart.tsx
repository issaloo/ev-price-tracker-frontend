"use client";
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";

const TimeSeriesChart = ({ data }: any) => {
  const accessors = {
    xAccessor: (d: any) => new Date(`${d.x}T00:00:00`),
    yAccessor: (d: any) => d.y,
  };
  // add func to get min/max, then get rough range for values to display
  // add more ticks
  return (
    <XYChart
      height={300}
      width={500} // make responsive
      margin={{ left: 65, top: 20, bottom: 60, right: 20 }}
      xScale={{ type: "time" }}
      yScale={{ type: "linear" }}
    >
      <AnimatedAxis orientation="left" label="Base Price" labelOffset={35} />
      <AnimatedAxis orientation="bottom" numTicks={6} />
      <AnimatedGrid columns={false} numTicks={10} />
      {/* fill dataKey */}
      <AnimatedLineSeries dataKey="Line 1" data={data} {...accessors} />
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div style={{ marginBottom: "5px" }}>
              $
              {accessors
                .yAccessor(tooltipData.nearestDatum.datum)
                .toLocaleString("en")}
            </div>
            <div
              style={{
                color: "#999",
              }}
            >
              {accessors
                .xAccessor(tooltipData.nearestDatum.datum)
                .toDateString()
                .replace(/^\S+\s/, "")}
            </div>
          </div>
        )}
      />
    </XYChart>
  );
};
export default TimeSeriesChart;
