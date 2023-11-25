"use client";
import { Card, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  Tooltip,
  XYChart,
} from "@visx/xychart";

const TimeSeriesChart = ({
  graphData,
  title,
}: {
  graphData: any;
  title: string;
}) => {
  const accessors = {
    xAccessor: (d: any) => new Date(`${d.x}T00:00:00`),
    yAccessor: (d: any) => d.y,
  };
  const { maxPrice, minPrice } = graphData.reduce(
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
  const gtMd = useMediaQuery(theme.breakpoints.up("md"));
  const gtLg = useMediaQuery(theme.breakpoints.up("lg"));
  const chartHeight = 400;
  const marginLeft = 85;
  const marginTop = 20;
  const marginBottom = 30;
  const marginRight = 25;
  const tickLabelProps = {
    fill: "gray",
  };

  return (
    <Card className="bg-white dark:bg-slate-800">
      <Typography
        variant="subtitle2"
        align="center"
        className="mx-3 mt-3 text-slate-400 dark:text-white"
      >
        {title}
      </Typography>
      <XYChart
        height={gtMd ? chartHeight : 0.625 * chartHeight}
        margin={{
          left: marginLeft,
          top: marginTop,
          bottom: marginBottom,
          right: marginRight,
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
          labelOffset={40}
          numTicks={gtMd ? 10 : 6}
          labelClassName="fill-black dark:fill-white"
          tickLabelProps={tickLabelProps}
        />
        <AnimatedAxis
          orientation="bottom"
          numTicks={gtLg ? 10 : 4}
          tickLabelProps={tickLabelProps}
        />
        <AnimatedGrid columns={false} />
        <AnimatedLineSeries
          dataKey="Graph"
          data={graphData}
          {...accessors}
          className="stroke-blue-400 dark:stroke-red-400 red"
        />
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
