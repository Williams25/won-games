import styled, { css } from "styled-components";

type ImageProps = {
  src: string;
};

export const Banner = styled.main``;

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    background: url(${src}) no-repeat;
  `}
`;

export const Caption = styled.div``;

export const Title = styled.h2``;

export const SubTitle = styled.h3``;
