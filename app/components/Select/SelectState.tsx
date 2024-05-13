"use client";
import { useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import stateObjectList from "./stateObjectList.json";
// TODO: abstract out State and sales tax into a json file!
// TODO: add dark mode, add State rebates as well

// st is an object, need to update the useState

const SelectState = () => {
  const [st, setSt] = useState<any>({ salesTax: "", rebate: "" });

  const handleChange = (event: SelectChangeEvent) => {
    setSt(event.target.value);
  };
  return (
    <div className="flex flex-row w-full">
      <div className="w-36 mr-4">
        <FormControl fullWidth>
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
      <div className="w-28">
        <TextField
          disabled
          label="Tax"
          value={st.salesTax}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
      </div>
      <div className="w-28">
        <TextField
          disabled
          label="Rebate"
          value={st.rebate}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </div>
    </div>
  );
};

export default SelectState;
