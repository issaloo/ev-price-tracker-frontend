"use client";
import { ChangeEvent, useState } from "react";
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import stateObjectList from "./stateObjectList.json";
// TODO: add dark mode, add State rebates as well
// TODO: add rebate threshold, if applicable

const FieldEstimator = () => {
  const [st, setSt] = useState<any>({ salesTax: "0", rebate: "" });
  const handleStChange = (event: SelectChangeEvent) => {
    setSt(event.target.value);
  };

  const [fed, setFed] = useState<boolean>(true);
  const handleFedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFed(event.target.checked);
  };
  const [msrp, setMSRP] = useState<number>(0);
  const handleMSRPChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMSRP(event.target.valueAsNumber);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between">
        <Typography
          variant="h6"
          className="text-gray-400 dark:text-slate-600 mt-2 ml-4"
        >
          Base Price
        </Typography>
        <TextField
          id="filled-number"
          label=""
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          onChange={handleMSRPChange}
          className="w-32 sm:w-48 dark:bg-slate-300"
        />
      </div>
      <Divider variant="middle" className="my-6" />
      <Typography
        variant="h6"
        className="text-gray-400 dark:text-slate-600 mb-4 ml-4"
      >
        Purchase State
      </Typography>
      <div className="flex flex-row w-full">
        <FormControl fullWidth>
          <InputLabel id="select-label-state">State</InputLabel>
          <Select
            labelId="select-label-state"
            id="select-state"
            value={st}
            label="State"
            onChange={handleStChange}
            className="dark:bg-slate-300 "
          >
            {stateObjectList.map((menuObject: any) => (
              <MenuItem key={menuObject.label} value={menuObject.value}>
                {menuObject.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-row w-full mt-4 justify-between">
        <TextField
          disabled
          label="Sales Tax"
          value={st.salesTax}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          className="ml-10 w-28 sm:w-40 dark:bg-slate-300"
        />
        <TextField
          disabled
          value={
            !msrp ? 0 : ((parseFloat(st.salesTax) / 100.0) * msrp).toFixed(2)
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+ $</InputAdornment>
            ),
          }}
          className="w-32 sm:w-48 dark:bg-slate-300"
        />
      </div>
      <div className="flex flex-row w-full mt-4 justify-between">
        <TextField
          disabled
          label="State Rebate"
          value={st.rebate}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          className="ml-10 w-28 sm:w-40 dark:bg-slate-300"
        />
        <TextField
          disabled
          value={st.rebate}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">– $</InputAdornment>
            ),
          }}
          className="w-32 sm:w-48 dark:bg-slate-300"
        />
      </div>
      <Divider variant="middle" className="my-6" />
      <div className="flex flex-row w-full justify-between">
        <Typography variant="h6" className="text-gray-400 dark:text-slate-600">
          Federal Rebate
        </Typography>
        <FormGroup className="w-20">
          <FormControlLabel
            control={<Switch defaultChecked onChange={handleFedChange} />}
            className="text-gray-400 dark:text-slate-600"
            label="Add"
          />
        </FormGroup>
      </div>
      <div className="flex flex-row w-full justify-end">
        <TextField
          disabled
          value={fed ? 7500 : 0}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">– $</InputAdornment>
            ),
          }}
          className="w-32 sm:w-48 dark:bg-slate-300"
        />
      </div>
      <Divider variant="middle" className="my-6" />
      <div className="flex flex-row w-full justify-between">
        <Typography
          variant="h6"
          className="mt-2 ml-4 text-gray-400 dark:text-slate-600"
        >
          Total Cost
        </Typography>
        <TextField
          disabled
          value={
            !msrp
              ? 0
              : (
                  msrp -
                  parseFloat(st.rebate) -
                  (fed ? 7500 : 0) +
                  (parseFloat(st.salesTax) / 100) * msrp
                ).toFixed(2)
          }
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          className="w-32 sm:w-48 dark:bg-slate-300"
        />
      </div>
    </div>
  );
};

export default FieldEstimator;
