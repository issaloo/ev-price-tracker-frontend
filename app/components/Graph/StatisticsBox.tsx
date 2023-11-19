"use client";
import { Card, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// { averageValue }: string
const StatisticsBox = ({ data, title }) => {
  const theme = useTheme();
  const gtMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Card className="sm:w-56 w-40 sm:h-28 h-20 mx-1">
      <div className="flex flex-col h-full">
        <Typography variant="subtitle2" align="left" className="h-1/4 mx-2">
          {title}
        </Typography>
        <Typography variant="h5" align="center" className="h-3/4">
          {data}
        </Typography>
      </div>
    </Card>
  );
};
export default StatisticsBox;
