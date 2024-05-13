import { MenuItem } from "@mui/material";

const SelectMenuItems = ({ menuObject }: { menuObject: any }) => {
  return <MenuItem value={menuObject.value}>{menuObject.label}</MenuItem>;
};

export default SelectMenuItems;
