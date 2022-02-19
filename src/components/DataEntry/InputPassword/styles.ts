import { Input as AntdInput } from 'antd'
import styled, { css } from 'styled-components'

interface IErrors {
  error?: string
}

export const InputPassword = styled(AntdInput.Password)<IErrors>`
  && {
    ${({ theme, error }) => css`
      width: 100%;
      font-size: ${theme.fonts.sizes.small};
      border-radius: ${theme.border.radius.default};
      color: ${theme.colors.darkGrey};
      background: none;

      &:hover {
        outline: none;
      }

      ${error &&
      css`
        border-color: ${theme.colors.error};
      `};
    `};
  }
`

export const Label = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.darkGrey};
    margin-bottom: 0.5rem;
  `}
`
