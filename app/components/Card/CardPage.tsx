import { ReactNode } from "react";
import { Card, CardContent } from "@mui/material";

interface Props {
  children: ReactNode;
}

const CardPage = ({ children }: Props) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-center">
        <Card className="mt-8 sm:w-[620px] w-[450px] mx-6 bg-white dark:bg-slate-800">
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardPage;
