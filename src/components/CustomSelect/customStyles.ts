import { StylesConfig } from "react-select";

const customStyles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    maxWidth: "300px",
    minWidth: "250px",
    background: "#FFFFFF",
    border: "1px solid transparent",
    borderRadius: "4px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "15px",
    color: "#000000",
    boxSizing: "border-box",
    cursor: "pointer",
  }),
  container: (baseStyles) => ({
    justifySelf: "end",
    maxWidth: 300,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 3,
    paddingBottom: "40px",
    ...baseStyles,
  }),
  menuPortal: (baseStyles) => ({
    ...baseStyles,
    paddingTop: "25px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles) => ({ ...baseStyles, color: "rgba(49, 48, 55, 0.5)" }),
};

export { customStyles };
