import { ReactNode } from "react";
import * as S from "./styles";

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "small" | "normal";

export type RibbonProps = {
  children: ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

export const Ribbon = ({
  children,
  color = "primary",
  size = "normal"
}: RibbonProps) => {
  return (
    <S.Ribbon color={color} size={size}>
      {children}
    </S.Ribbon>
  );
};
