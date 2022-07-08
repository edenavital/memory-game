import { styled } from "../../assets/theme";

export const CardWrapper = styled("div")({
  margin: 10,

  width: 78,
  height: 78,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& img": {
    width: 78,
    height: 78,
  },
});
