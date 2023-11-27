"use client";
import { Card, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const StatisticsBox = ({
  statsData,
  title,
  isDollar,
}: {
  statsData: number;
  title: string;
  isDollar: boolean;
}) => {
  const theme = useTheme();
  const gtSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card className="flex-1 md:h-28 h-20 bg-white dark:bg-slate-800">
      <div className="flex flex-col h-full">
        <div className="flex flex-col md:h-8 h-6 justify-center">
          <Typography
            variant="subtitle2"
            align={gtSm ? "left" : "center"}
            className={` ${
              gtSm ? "mx-2" : ""
            } text-slate-400 dark:text-slate-300`}
          >
            {title}
          </Typography>
        </div>
        <div className="flex flex-col md:h-16 h-12 justify-center">
          <Typography
            variant="h5"
            align="center"
            className="text-black dark:text-slate-400"
          >
            {isDollar
              ? `$${statsData.toLocaleString("en", {
                  maximumFractionDigits: 0,
                })}`
              : `${statsData}`}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
export default StatisticsBox;
