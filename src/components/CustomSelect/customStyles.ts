import { StylesConfig } from "react-select";

const customStyles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    background: "#FFFFFF",
    border: "1px solid #EEEEEE",
    borderRadius: "5px",
    maxWidth: "256px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
    color: "#000000",
    boxSizing: "border-box",
  }),
  container: (baseStyles) => ({
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    ...baseStyles,
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles) => ({ ...baseStyles, color: "rgba(49, 48, 55, 0.5)" }),
};

export { customStyles };
