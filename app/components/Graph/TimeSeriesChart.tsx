"use client";
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";

const TimeSeriesChart = ({ data }) => {
  const newData = data.map((obj) => ({
    ...obj,
    x: new Date(obj.x),
  }));
  const accessors = {
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
  };
  // work on fixing this error
  return (
    <XYChart
      height={300}
      xScale={{ type: "time" }}
      yScale={{ type: "linear", domain: [30000, 50000] }}
    >
      <AnimatedAxis orientation="left" label="Base Price" />
      <AnimatedAxis orientation="bottom" numTicks={5} />
      <AnimatedGrid columns={false} numTicks={10} />
      <AnimatedLineSeries dataKey="Line 1" data={newData} {...accessors} />
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData.nearestDatum.key}
            </div>
            {accessors.xAccessor(tooltipData.nearestDatum.datum)}
            {", "}
            {accessors.yAccessor(tooltipData.nearestDatum.datum)}
          </div>
        )}
      />
    </XYChart>
  );
};
export default TimeSeriesChart;
