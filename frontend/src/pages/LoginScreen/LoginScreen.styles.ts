import { styled } from "../../assets/theme";
// import { up, between } from "styled-breakpoints";

import { ReactComponent as LoginWrapperOne } from "../../assets/icons/login-wrapper-one.svg";
import { ReactComponent as LoginWrapperTwo } from "../../assets/icons/login-wrapper-two.svg";
import { ReactComponent as LoginWrapperThree } from "../../assets/icons/login-wrapper-three.svg";
import { Button } from "../../components/Button";

import { TextField } from "../../components/TextField";

export const MyComponent = styled("div")((props) => {
  console.log("p", props);
  return {
    color: "black",
    height: 500,
    width: 500,
    background: "red",
    // [up("sm")(props)]: {
    //   background: "blue",
    // },
    // [up("md")(props)]: {
    //   background: "blue",
    // },
  };
});

export const StyledLoginWrapperOne = styled(LoginWrapperOne)({
  position: "absolute",
});

export const StyledLoginWrapperTwo = styled(LoginWrapperTwo)({
  position: "absolute",
  zIndex: 200,
});

export const StyledLoginWrapperThree = styled(LoginWrapperThree)({
  position: "absolute",
});

export const SubmitButton = styled(Button)({});

export const TextNickname = styled(TextField)({
  margin: 15,
});
