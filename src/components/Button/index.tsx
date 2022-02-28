import {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ElementType
} from "react";
import * as S from "./styles";

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonTypes & {
  children?: ReactNode;
  size?: "large" | "small" | "medium";
  fullWidth?: boolean;
  icon?: ReactNode;
  as?: ElementType;
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
