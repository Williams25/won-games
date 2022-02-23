import { ReactNode, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  size?: "large" | "small" | "medium";
  fullWidth?: boolean;
  icon?: ReactNode;
};

export const Button = ({
  children,
  size = "medium",
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button {...rest} size={size} fullWidth={fullWidth} hasIcon={!!icon}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Button>
  );
};
