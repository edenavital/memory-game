import { styled } from "../../assets/theme";
// import { up, between } from "styled-breakpoints";

export const Header = styled("div")((props) => {
  return {
    width: "100%",
    display: "flex",
  };
});

export const LeftSideWrapper = styled("div")((props) => {
  return {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
});

export const LeftSideText = styled("div")((props) => ({
  textAlign: "left",
}));

export const GameContentWrapper = styled("div")((props) => ({
  width: "100%",
  height: "100%",
  display: "flex",
}));
