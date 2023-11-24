"use client";
import { Card, Typography } from "@mui/material";

const CurrentBox = ({
  currentData,
  title,
  isDollar,
}: {
  currentData: number;
  title: string;
  isDollar: boolean;
}) => {
  return (
    <Card className="w-full md:h-28 h-20 bg-white dark:bg-slate-800">
      <div className="flex flex-col h-full">
        <div className="flex flex-col md:h-8 h-6 justify-center">
          <Typography
            variant="subtitle1"
            align="left"
            className="mx-2 text-slate-400 dark:text-slate-300"
          >
            {title}
          </Typography>
        </div>
        <div className="flex flex-col md:h-16 h-12 justify-center">
          <Typography
            variant="h4"
            align="center"
            className="text-green-400 dark:text-white"
          >
            {isDollar
              ? `$${currentData.toLocaleString("en")}`
              : `${currentData}`}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
export default CurrentBox;
