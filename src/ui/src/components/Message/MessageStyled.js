import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const UserWrapper = styled.div(css`
  background: #ffdbdb;
  font-weight: bold;
  margin: 3px;
  padding: 10px;
  border: 2px hidden rgba(0,0,0,0.61);
  border-radius: 19px;
  align-self: flex-start;
`)

export const ContentWrapper = styled.div(css`
  margin: 3px 50px;
  padding: 10px;
  border: 2px hidden rgba(0,0,0,0.61);
  border-radius: 19px;
  background: #ddd;
  align-self: flex-start;
`)

export const MessagesWrapper = styled.div(css`
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
  @media only screen and (max-height: 900px) {
    height: 65vh;
  }
  @media only screen and (max-height: 500px) {
    height: 50vh;
  }
`)
