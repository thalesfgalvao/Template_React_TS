import React from 'react'
import { InputProps, Tooltip } from 'antd'
//styles
import * as S from './styles'

export interface IProps extends InputProps {
  error?: string
  label?: string
}

const Input = ({ error, label, name, ...rest }: IProps) => {
  return (
    <>
      <Tooltip placement="topLeft" title={error ?? null}>
        <S.Label>{label}</S.Label>
        <S.Input error={error} name={name} id={name} {...rest} />
      </Tooltip>
    </>
  )
}

export default Input
