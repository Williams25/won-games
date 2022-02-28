import styled, { css, DefaultTheme } from "styled-components";
import media from "styled-media-query";
import { HeadingProps, LineColors } from ".";

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::before {
      position: absolute;
      bottom: -0.7rem;
      left: 0;
      content: "";
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::before {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `
};

export const Heading = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
