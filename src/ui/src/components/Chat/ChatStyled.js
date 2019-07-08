import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const Chat = styled.div(css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`)

export const TextArea = styled.div(css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  postition: fixed;
  bottom: 15px;
  height: 50px;
`)

export const Input = styled.input(css`
  font-size: 30px;
  width: 80%;
`)
