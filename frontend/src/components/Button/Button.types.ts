import { ReactNode } from "react";

export enum ButtonTypes {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export interface IButton {
  children: ReactNode;
  type?: ButtonTypes;
  disabled?: boolean;
  onClick?: () => void;
}
