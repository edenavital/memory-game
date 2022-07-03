import { styled } from "../../assets/theme";
import { TextField as MuiTextField } from "@mui/material";

export const TextFieldWrapper = styled("div")(({ theme }) => {
  return {
    background: `linear-gradient(180deg, #A8DCFF 0%, #3BB0FF 100%)`,
    borderRadius: "9px",
    padding: 3,
    margin: 10,
  };
});

export const TextField = styled(MuiTextField)(({ theme }) => {
  return {
    "& *": {
      boxSizing: "border-box",
      borderRadius: "6px !important",
    },

    input: {
      padding: 10,
      background: "rgba(195, 100, 122, 0.4) !important",
      color: theme.palette.primary.contrastText,
      "&::placeholder": {
        color: `${theme.palette.primary.contrastText}50`,
        fontSize: theme.typography.fontSize,
      },
    },
  };
});
