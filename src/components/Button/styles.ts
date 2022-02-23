import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

type WrapperProps = Pick<ButtonProps, "size">;

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall};
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    height: 4rem;
    font-size: ${theme.font.sizes.small};
  `
};

export const Button = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    transition: filter 0.5s;
    transition-delay: 0.1s;

    &:hover {
      filter: brightness(0.9);
    }

    ${!!size && buttonModifiers[size](theme)}
  `}
`;
