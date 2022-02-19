import styled, { css, DefaultTheme } from 'styled-components'
import { Button as AntdButton } from 'antd'
import { IButtonProps } from '.'

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkSuccess};
    color: ${theme.colors.white};
    transition: 200ms ease-in;
    border: none;
    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.darkSuccess};
      border: 1px solid ${theme.colors.darkSuccess};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.darkSuccess};
    border: 1px solid ${theme.colors.darkSuccess};
    transition: 200ms ease-in;
    &:hover {
      background: ${theme.colors.darkSuccess};
      color: ${theme.colors.white};
      border: none;
    }
  `
}

export const Button = styled(AntdButton)<IButtonProps>`
  ${({ theme, kind }) => css`
    && {
      width: 100%;
      border-radius: 0.5rem;
      ${kind && wrapperModifiers[kind](theme)}
    }
  `}
`
