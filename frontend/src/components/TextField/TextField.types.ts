import { ReactNode } from "react";

export interface ITextField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
