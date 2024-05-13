"use client";
import * as React from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
// TODO: abstract out State and sales tax into a json file!
// TODO: add dark mode, add State rebates as well

const SelectBox = () => {
  const [state, setTax] = React.useState("");

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
            <MenuItem value={7.5}>California</MenuItem>
            <MenuItem value={6.625}>New Jersey</MenuItem>
            <MenuItem value={5.75}>Ohio</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="w-24">
        <TextField
          disabled
          label="Sales Tax"
          value={state}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
      </div>
    </div>
  );
};

export default SelectBox;
