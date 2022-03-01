import * as S from "./styles";
import { Button } from "components/Button";

export type HighlightProps = {
  title: string;
  subTitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
};

export const Highlight = ({
  subTitle,
  title,
  buttonLabel,
  buttonLink,
  backgroundImage
}: HighlightProps) => {
  return (
    <S.Highlight backgroundImage={backgroundImage}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Highlight>
  );
};
