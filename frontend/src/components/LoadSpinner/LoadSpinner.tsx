import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import * as Styled from "./LoadSpinner.styles";

export const LoadSpinner: FC = () => {
  return (
    <Styled.LoadSpinnerWrapper>
      {/* <Styled.LoadSpinnerContent> */}
      <CircularProgress />
      {/* </Styled.LoadSpinnerContent> */}
    </Styled.LoadSpinnerWrapper>
  );
};
