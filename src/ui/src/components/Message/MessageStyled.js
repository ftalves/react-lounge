import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const User = styled.div(css`
  background: #ffdbdb;
  font-weight: bold;
  margin: 3px;
  padding: 10px;
  border: 2px hidden rgba(0,0,0,0.61);
  border-radius: 19px;
  align-self: flex-start;
`)

export const Message = styled.div(css`
  margin: 3px 50px;
  padding: 10px;
  border: 2px hidden rgba(0,0,0,0.61);
  border-radius: 19px;
  background: #ddd;
  align-self: flex-start;
`)

export const Notice = styled.div(css`
  font-size: 20px;
  padding: 5px;
  background: #8fa68f;
  color: white;
  border: 2px hidden rgba(0,0,0,0.61);
  border-radius: 5px;
`)
