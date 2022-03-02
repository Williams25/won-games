/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";
import {
  FavoriteBorder,
  Favorite,
  AddShoppingCart
} from "@styled-icons/material-outlined";
import { Button } from "components/Button";

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
};

export const GameCard = ({
  developer,
  img,
  price,
  title,
  promotionalPrice,
  favorite = false,
  onFav
}: GameCardProps) => {
  return (
    <S.GameCard>
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
