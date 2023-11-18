"use client";
import { Card,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  Tooltip,
  XYChart,
} from "@visx/xychart";

const TimeSeriesChart = ({ data }: any) => {
  const accessors = {
    xAccessor: (d: any) => new Date(`${d.x}T00:00:00`),
    yAccessor: (d: any) => d.y,
  };
  const { maxPrice, minPrice } = data.reduce(
    (acc: any, item: any) => {
      return {
        maxPrice: Math.max(acc.maxPrice, item.y),
        minPrice: Math.min(acc.minPrice, item.y),
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
  const chartHeight = 400;
  const margin_left = 85;
  const margin_top = 20;
  const margin_bottom = 30;
  const margin_right = 25;
  return (
    <Card>
      <XYChart
        height={gt_md ? chartHeight : 0.625 * chartHeight} //
        margin={{
          left: margin_left,
          top: margin_top,
          bottom: margin_bottom,
          right: margin_right,
        }}
        xScale={{ type: "time" }}
        yScale={{
          type: "linear",
          domain: [minPrice * 0.7, maxPrice * 1.2],
          nice: true,
          zero: false,
        }}
      >
        <AnimatedAxis
          orientation="left"
          label="Base Price ($)"
          labelClassName="font"
          labelOffset={40}
          numTicks={gt_md ? 10 : 6}
        />
        <AnimatedAxis orientation="bottom" numTicks={gt_md ? 10 : 4} />
        <AnimatedGrid columns={false} />
        <AnimatedLineSeries dataKey="Graph" data={data} {...accessors} />
        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData }) => (
            <div>
              <div style={{ marginBottom: "5px" }}>
                $
                {accessors
                  .yAccessor(tooltipData?.nearestDatum?.datum)
                  .toLocaleString("en")}
              </div>
              <div
                style={{
                  color: "#999",
                }}
              >
                {accessors
                  .xAccessor(tooltipData?.nearestDatum?.datum)
                  .toDateString()
                  .replace(/^\S+\s/, "")}
              </div>
            </div>
          )}
        />
      </XYChart>
    </Card>
  );
};
export default TimeSeriesChart;
