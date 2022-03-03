import { BannerProps, Banner } from "components/Banner";
import { SliderSettings, Slider } from "components/Slider";

import * as S from "./styles";

export type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  waitForAnimate: true,
  lazyLoad: "progressive",
  accessibility: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
};

export const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.BannerSlider>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </S.BannerSlider>
  );
};
