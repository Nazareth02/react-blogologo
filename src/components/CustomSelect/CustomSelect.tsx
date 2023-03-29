import { options } from "config";
import Select, { SingleValue } from "react-select";
import { SelectOptions } from "types";

import { customStyles } from "./customStyles";

interface SelectProps {
  handleSelect: (option: SingleValue<SelectOptions | null | any>) => void;
}

export const CustomSelect = ({ handleSelect }: SelectProps) => {
  return (
    <Select
      options={options}
      onChange={handleSelect}
      styles={customStyles}
      defaultValue={options[0]}
      isMulti={false}
      isSearchable={false}
    />
  );
};
