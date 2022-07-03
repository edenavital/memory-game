import { FC } from "react";
// import { Button as MuiButton } from "@mui/material";
import * as Styled from "./TextField.styles";
import { ITextField } from "./TextField.types";

export const TextField: FC<ITextField> = ({ value, onChange }) => {
  return (
    <Styled.TextFieldWrapper>
      <Styled.TextField
        placeholder={"Type here..."}
        value={value}
        onChange={onChange}
      />
    </Styled.TextFieldWrapper>
  );
};
