import { styled } from "../../assets/theme";
import { TextField as MuiTextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "../Typography";
export const NavigateBackWrapper = styled("div")(({ theme }) => {
  return {
    width: "100%",
    marginLeft: 10,
    display: "inline-flex",
    alignItems: "center",
    height: "50px",
  };
});

export const BackIcon = styled(ArrowBackIcon)(({ theme }) => {
  return {
    color: theme.palette.primary.link,
    marginRight: 5,
  };
});
