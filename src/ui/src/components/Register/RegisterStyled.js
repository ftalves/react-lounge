import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const RegisterWrapper = styled.div(css`
  display: flex;
  width: 100vw;
  font-size: 50px;
  flex-direction: column;
  align-items: center;
`)

export const Input = styled.input(css`
  font-size: 30px;
  width: 300px;
  height: 40px;
`)

export const Alert = styled.p(css`
  font-size: 18px;
  color: red;
`)
