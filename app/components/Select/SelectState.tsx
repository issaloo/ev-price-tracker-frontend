"use client";
import { useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import SelectMenuItems from "./SelectMenuItems";
import stateObjectList from "./stateObjectList.json";
// TODO: abstract out State and sales tax into a json file!
// TODO: add dark mode, add State rebates as well

const SelectState = () => {
  const [state, setTax] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTax(event.target.value);
  };
  return (
    <div className="flex flex-row w-full">
      <div className="w-36 mr-4">
        <FormControl fullWidth>
          <InputLabel id="select-label-state">State</InputLabel>
          <Select
            labelId="select-label-state"
            id="select-state"
            value={state}
            label="State"
            onChange={handleChange}
          >
            {stateObjectList.map((menuObject: any) => {
              return (
                <SelectMenuItems
                  key={menuObject.label}
                  menuObject={menuObject}
                />
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="w-28">
        <TextField
          disabled
          label="Tax"
          value={state}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
      </div>
    </div>
  );
};

export default SelectState;
