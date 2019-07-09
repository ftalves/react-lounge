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

export const MessageArea = styled.div(css`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  padding: 30px;
  overflow: auto;
  margin-bottom: 10px;
  background: #eee;
  border: 13px ridge rgba(0,0,0,0.61);
  border-radius: 19px;
  height: 80vh;
  width: 70vw;
  max-width: 800px;
  @media only screen and (max-height: 900px) {
    height: 65vh;
  }
  @media only screen and (max-height: 500px) {
    height: 50vh;
  }
`)
