import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth">;

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
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg,
    img {
      width: 1.8rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
};

export const Button = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transition-delay: 0.1s;

    &:hover {
      filter: brightness(0.9);
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && buttonModifiers[size](theme)}
    ${!!fullWidth && buttonModifiers.fullWidth}
    ${!!hasIcon && buttonModifiers.withIcon(theme)}
  `}
`;
