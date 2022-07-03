import { FC } from "react";
import { ITypography } from "./Typography.types";
import * as Styled from "./Typography.styles";

export const Typography: FC<ITypography> = ({
  children,
  fontSize = 18,
  color,
}) => {
  return (
    <Styled.Typography fontSize={fontSize} color={color}>
      {children}
    </Styled.Typography>
  );
};
