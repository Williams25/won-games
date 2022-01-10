import * as S from "./styles";

export type MainProps = {
  title: string;
  description: string;
};

export const Main = ({ description, title }: MainProps) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e react avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="um desenvolver de frete ao computador"
      />
    </S.Wrapper>
  );
};
