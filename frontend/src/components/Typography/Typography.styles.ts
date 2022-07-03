import { Typography as MuiTypography } from "@mui/material";
import { ITypography } from "./Typography.types";
import styled from "styled-components";

export const Typography = styled(MuiTypography)<ITypography>(
  ({ theme, color }) => {
    return {
      "&.MuiTypography-root": {
        color: color ?? theme.palette.primary.contrastText,
        fontWeight: 700,
      },
    };
  }
);
