import { ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children?: ReactNode;
  size?: "large" | "small" | "medium";
  fullWidth?: boolean;
};

export const Button = ({
  children,
  size = "medium",
  fullWidth = false
}: ButtonProps) => {
  return (
    <S.Button size={size} fullWidth={fullWidth}>
      {!!children && <span>{children}</span>}
    </S.Button>
  );
};
