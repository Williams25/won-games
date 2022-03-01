import * as S from "./styles";
import { Button } from "components/Button";

export type HighlightProps = {
  title: string;
  subTitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
};

export const Highlight = ({
  subTitle,
  title,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage
}: HighlightProps) => {
  return (
    <S.Highlight backgroundImage={backgroundImage}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
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
