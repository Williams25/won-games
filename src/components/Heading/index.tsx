import { ReactNode } from "react";
import * as S from "./styles";

export type LineColors = "primary" | "secondary";

export type HeadingProps = {
  children: ReactNode;
  color?: "white" | "black";
  size?: "small" | "medium";
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
};

export const Heading = ({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  size = "medium",
  lineColor = "primary"
}: HeadingProps) => {
  return (
    <S.Heading
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      size={size}
      lineColor={lineColor}
    >
      {children}
    </S.Heading>
  );
};
