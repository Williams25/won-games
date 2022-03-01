import * as S from "./styles";
import { Button } from "components/Button";

export type HighlightProps = {
  title: string;
  subTitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: "right" | "left";
};

export const Highlight = ({
  subTitle,
  title,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = "right"
}: HighlightProps) => {
  return (
    <S.Highlight backgroundImage={backgroundImage} alignment={alignment}>
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
