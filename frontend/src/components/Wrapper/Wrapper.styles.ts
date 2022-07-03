import { styled } from "../../assets/theme";
import { IWrapper } from "./Wrapper.types";
// import { up, between } from "styled-breakpoints";

export const Wrapper = styled("div")<IWrapper>(({ theme, withHeader }) => {
  return {
    ...theme.mixins.genericWrapper,
    height: withHeader ? "calc(100% - 50px)" : "100%",
    padding: "0px 10px",
    boxSizing: "border-box",
  };
});
