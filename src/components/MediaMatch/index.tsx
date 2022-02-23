import styled, { css } from "styled-components";
import media, { DefaultBreakpoints } from "styled-media-query";

type breakpoints = keyof DefaultBreakpoints;

type MediaMatchProps = {
  greaterThan?: breakpoints;
  lessThan?: breakpoints;
};

const mediaMatchModifiers = {
  lessThan: (size: breakpoints) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,
  greaterThan: (size: breakpoints) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
};

export const MediaMatch = styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;

    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
  `}
`;
