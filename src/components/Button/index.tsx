import { ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children?: ReactNode;
  size?: "large" | "small" | "medium";
};

export const Button = ({ children, size = "medium" }: ButtonProps) => {
  return (
    <S.Button size={size}>{!!children && <span>{children}</span>}</S.Button>
  );
};
