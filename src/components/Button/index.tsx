import { ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children?: ReactNode;
  size?: "large" | "small" | "medium";
  fullWidth?: boolean;
  icon?: ReactNode;
};

export const Button = ({
  children,
  size = "medium",
  fullWidth = false,
  icon
}: ButtonProps) => {
  return (
    <S.Button size={size} fullWidth={fullWidth} hasIcon={!!icon}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Button>
  );
};
