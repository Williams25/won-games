import { ReactNode } from "react";
import * as S from "./styles";

export type HeadingProps = {
  children: ReactNode;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineBottom?: boolean;
};

export const Heading = ({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <S.Heading color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </S.Heading>
  );
};
