import { FC } from "react";

import { ILayout } from "./Layout.types";
import * as Styled from "./Layout.styles";

export const Layout: FC<ILayout> = ({ children }) => {
  return <Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>;
};
