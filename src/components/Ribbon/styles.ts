import styled, { css, DefaultTheme } from "styled-components";

import { RibbonProps } from ".";

type WrapperRibbon = Pick<RibbonProps, "color" | "size">;

const wrapperModifiers = {
  color: (theme: DefaultTheme, { color }: WrapperRibbon) => css`
    background-color: ${theme.colors[color]};
  `,
  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
  `,
  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
  `
};

export const Ribbon = styled.div<WrapperRibbon>`
  ${({ theme, color, size }) => css`
    ${!!color && wrapperModifiers.color(theme, { color })}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
