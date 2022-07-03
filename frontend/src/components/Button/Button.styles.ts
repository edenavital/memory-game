import { styled } from "../../assets/theme";

import { Button as MuiButton } from "@mui/material";
import { ReactComponent as BtnLayerOne } from "../../assets/icons/btn-top-one.svg";
import { ReactComponent as BtnLayerTwo } from "../../assets/icons/btn-top-two.svg";

export const ButtonWrapper = styled("div")({
  position: "relative",
  width: "fit-content",
  overflow: "hidden",
  padding: 5,
});

export const Button = styled(MuiButton)(({ theme }) => {
  return {
    "&.MuiButton-root": {
      color: theme.palette.primary.contrastText,
      backgroundColor: "rgb(98, 161, 238)",
      borderRadius: "48px !important",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      width: "214px",
      height: "54px",
      fontWeight: 700,
      textTransform: "none",
    },
  };
});

export const ButtonOneLayer = styled(BtnLayerOne)((props) => {
  return {
    position: "absolute",
    zIndex: 1,
    mixBlendMode: "screen",
    width: "100%",
  };
});

export const ButtonTwoLayer = styled(BtnLayerTwo)((props) => {
  return {
    position: "absolute",
    zIndex: 2,
    left: 15,
    mixBlendMode: "screen",
    width: "fit-content",
    // width: "100%",
  };
});
