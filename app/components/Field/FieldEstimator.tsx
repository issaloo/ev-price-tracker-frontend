"use client";
import { ChangeEvent, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import stateObjectList from "./stateObjectList.json";
// TODO: add dark mode, add State rebates as well

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
        <div className="w-40 mr-16" />
        <TextField
          id="filled-number"
          label="MSRP"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
          onChange={handleMSRPChange}
          className="w-64"
        />
      </div>
      <div className="flex flex-row w-full mt-8">
        <FormControl fullWidth className="w-48">
          <InputLabel id="select-label-state">State</InputLabel>
          <Select
            labelId="select-label-state"
            id="select-state"
            value={st}
            label="State"
            onChange={handleStChange}
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
        <div className="w-64">
          <TextField
            disabled
            label="Sales Tax"
            value={st.salesTax}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            className="ml-8 mr-12 w-40"
          />
        </div>
        <TextField
          disabled
          label="Sales Tax Cost"
          value={
            !msrp ? 0 : ((parseFloat(st.salesTax) / 100.0) * msrp).toFixed(2)
          }
          variant="filled" // Add default nothing
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+$</InputAdornment>
            ),
          }}
          className="w-64"
        />
      </div>
      <div className="flex flex-row w-full mt-4 justify-between">
        <div className="w-64">
          <TextField
            disabled
            label="State Rebate"
            value={st.rebate}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            className="ml-8 mr-12 w-40"
          />
        </div>
        <TextField
          disabled
          label="State Discount"
          value={st.rebate}
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">-$</InputAdornment>
            ),
          }}
          className="w-64"
        />
      </div>
      <div className="flex flex-row w-full mt-8 justify-between">
        <FormGroup className="w-64">
          <FormControlLabel
            control={<Switch defaultChecked onChange={handleFedChange} />}
            className="text-black dark:text-slate-400"
            label="Federal Rebate"
          />
        </FormGroup>
        <TextField
          disabled
          label="Federal Discount"
          value={fed ? 7500 : 0}
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">-$</InputAdornment>
            ),
          }}
          className="w-64"
        />
      </div>
      <div className="flex flex-row w-full mt-8 justify-between">
        <div className="w-64" />
        <TextField
          disabled
          label="Estimated Total Cost"
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
          className="w-64"
        />
      </div>
    </div>
  );
};

export default FieldEstimator;
