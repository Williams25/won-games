import * as S from "./styles";
import { Button } from "components/Button";

export type HighlightProps = {
  title: string;
  subTitle: string;
  buttonLabel: string;
  buttonLink: string;
};

export const Highlight = ({
  subTitle,
  title,
  buttonLabel,
  buttonLink
}: HighlightProps) => {
  return (
    <S.Highlight>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Highlight>
  );
};
