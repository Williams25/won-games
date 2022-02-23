import styled, { css, DefaultTheme } from "styled-components";
import media from "styled-media-query";
import { HeadingProps } from ".";

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::before {
      position: absolute;
      bottom: -0.7rem;
      left: 0;
      content: "";
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.secondary};
    }
  `
};

export const Heading = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${media.greaterThan("medium")`
    font-size: ${theme.font.sizes.xxlarge};
    `};

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`;
