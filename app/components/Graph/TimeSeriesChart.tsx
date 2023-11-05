"use client";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AnimatedAxis,
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
  const { maxPrice, minPrice, maxDate, minDate } = data.reduce(
    (acc: any, item: any) => {
      const currentDate = new Date(item.x);
      return {
        maxPrice: Math.max(acc.maxPrice, item.y),
        minPrice: Math.min(acc.minPrice, item.y),
        maxDate: currentDate > acc.maxDate ? currentDate : acc.maxDate,
        minDate: currentDate < acc.minDate ? currentDate : acc.minDate,
      };
    },
    {
      maxPrice: -Infinity,
      minPrice: Infinity,
      maxDate: new Date(0),
      minDate: new Date(),
    },
  );
  const theme = useTheme();
  const gt_md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <XYChart
      height={gt_md ? 400 : 300} //
      width={gt_md ? 800 : 500} // make this based on window size?
      margin={{ left: 65, top: 20, bottom: 20, right: 0 }}
      xScale={{ type: "time" }}
      yScale={{
        type: "linear",
        domain: [minPrice, maxPrice * 1.3],
      }}
    >
      <AnimatedAxis
        orientation="left"
        label="Base Price"
        labelClassName="font"
        labelOffset={35}
      />
      <AnimatedAxis orientation="bottom" numTicks={gt_md ? 10 : 4} />
      <AnimatedGrid columns={false} />
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
