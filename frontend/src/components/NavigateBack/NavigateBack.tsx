import { FC } from "react";
import { Typography } from "../Typography";
// import { Button as MuiButton } from "@mui/material";
import * as Styled from "./NavigateBack.styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../assets/theme";
export const NavigateBack: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Styled.NavigateBackWrapper onClick={() => navigate(-1)}>
      <Styled.BackIcon fontSize="small" />
      <Typography color={theme.palette.primary.link}>Back</Typography>
    </Styled.NavigateBackWrapper>
  );
};
