import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const MessageArea = styled.div(css`
  overflow: auto;
  margin-bottom: 10px;
  background: #eee;
  border: 13px ridge rgba(0,0,0,0.61);
  border-radius: 19px;
  height: 80vh;
  @media only screen and (max-height: 400px) {
    height: 60vh;
  }
`)

export const TextArea = styled.div(css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch
  postition: fixed;
  bottom: 15px;
  height: 50px;
`)

export const RegisterArea = styled.div(css`
  display: flex;
  width: 100vw;
  font-size: 50px;
  flex-direction: column;
  align-items: center;
`)

export const RegisterInput = styled.input(css`
  font-size: 30px;
  width: 300px;
  height: 40px;
`)

export const Input = styled.input(css`
  font-size: 30px;
  width: 80%;
`)
