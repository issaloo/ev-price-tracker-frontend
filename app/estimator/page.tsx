import {
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import SelectState from "../components/Select/SelectState";

export const metadata = {
  title: "EV Price Tracker | Vehicle Cost Estimator",
  description:
    "Easily calculate the total cost of your next EV purchase, including sales tax and rebates, with our comprehensive online Cost Estimator tool.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Estimator() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col md:w-3/5 sm:w-4/5 mt-4">
          <h4 className="mx-6 text-4xl font-bold capitalize">Cost Estimator</h4>
        </div>
        <Card className="mt-4 md:w-3/5 sm:w-4/5 mx-6 bg-white dark:bg-slate-800">
          <CardContent>
            <Typography
              variant="h5"
              className="mb-2 text-black dark:text-slate-200"
            ></Typography>
            <div className="w-28">
              <TextField label="Price" value="TBD" />
            </div>
            <SelectState />
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                className="text-black dark:text-slate-400"
                label="Federal EV Rebate"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
