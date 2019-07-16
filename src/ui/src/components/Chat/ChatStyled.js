import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const Chat = styled.div(css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`)

export const MessageArea = styled.div(css`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  padding: 30px;
  overflow: auto;
  margin-bottom: 10px;
  background: #eee;
  border: 9px ridge rgba(0, 0, 0, 0.61);
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

export const TextArea = styled.div(css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  postition: fixed;
  bottom: 15px;
`)

export const Input = styled.input(css`
  width: 70vw;
  max-width: 800px;
  height: 50px;
  border-style: hidden;
  box-shadow: 6px 8px 17px 2px #b0adad;
  font-size: 30px;
`)
