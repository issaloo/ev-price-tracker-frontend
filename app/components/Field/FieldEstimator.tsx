"use client";
import { useState } from "react";
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
  const [st, setSt] = useState<any>({ salesTax: "", rebate: "" });

  const handleChange = (event: SelectChangeEvent) => {
    setSt(event.target.value);
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
            onChange={handleChange}
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
          label="Tax Cost"
          value={st.salesTax * 10} // INSERT MSRP to multiply
          variant="filled"
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
            label="Rebate"
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
          label="Rebate Discount"
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
            control={<Switch defaultChecked />}
            className="text-black dark:text-slate-400"
            label="Federal Rebate"
          />
        </FormGroup>
        <TextField
          disabled
          label="Federal Discount"
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
        <div className="w-64" />
        <TextField
          disabled
          label="Estimated Total Cost"
          value={st.rebate} // update cost resulting cost here
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
