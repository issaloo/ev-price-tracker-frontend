import { ReactNode } from "react";
import { Card, CardContent } from "@mui/material";

interface Props {
  children: ReactNode;
}

const CardPage = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row justify-center items-start">
        <Card className="mt-9 md:w-3/5 sm:w-4/5 mx-6">
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardPage;
