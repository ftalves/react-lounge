import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const RegisterWrapper = styled.div(css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99vw;
  font-size: 50px;
`)

export const Input = styled.input(css`
  width: 300px;
  height: 40px;
  border-style: hidden;
  box-shadow: 6px 8px 17px 2px #b0adad;
  font-size: 30px;
`)

export const Alert = styled.p(css`
  font-size: 18px;
  color: red;
`)
