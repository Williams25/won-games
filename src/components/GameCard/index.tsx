/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";
import {
  FavoriteBorder,
  Favorite,
  AddShoppingCart
} from "@styled-icons/material-outlined";
import { Button } from "components/Button";
import { RibbonColors, RibbonSizes, Ribbon } from "components/Ribbon";
import { ReactNode } from "react";

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

export const GameCard = ({
  developer,
  img,
  price,
  title,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "small"
}: GameCardProps) => {
  return (
    <S.GameCard>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="remove to wish list" />
          ) : (
            <FavoriteBorder aria-label="add to wish list" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.GameCard>
  );
};
