import { FC } from "react";
import * as Styled from "./Wrapper.styles";
import { IWrapper } from "./Wrapper.types";

export const Wrapper: FC<IWrapper> = ({ children, withHeader = false }) => {
  return <Styled.Wrapper withHeader={withHeader}>{children}</Styled.Wrapper>;
};
