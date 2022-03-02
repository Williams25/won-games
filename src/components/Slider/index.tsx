import * as S from "./styles";
import ReactSlick, { Settings } from "react-slick";
import { ReactNode } from "react";

export type SliderSettings = Settings;

export type SliderProps = {
  children: ReactNode;
  settings: SliderSettings;
};

export const Slider = ({ children, settings }: SliderProps) => {
  return (
    <S.Slider>
      <ReactSlick {...settings}>{children}</ReactSlick>
    </S.Slider>
  );
};
