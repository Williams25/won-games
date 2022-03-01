/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";
import {
  FavoriteBorder,
  AddShoppingCart
} from "@styled-icons/material-outlined";
import { Button } from "components/Button";

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
};

export const GameCard = ({ developer, img, price, title }: GameCardProps) => {
  return (
    <S.GameCard>
      <S.ImageBox>
        <img src={img} alt={title} width={400} height={254} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavButton role="button">
          <FavoriteBorder aria-label="add to wish list" />
        </S.FavButton>

        <S.BuyBox>
          <S.Price>{price}</S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.GameCard>
  );
};
