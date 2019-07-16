import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const Wrapper = styled.div(css`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
`)

export const Button = styled.div(css`
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 10px 0 0 10px;
  color: white;
  background: #999786;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
`)

export const UserList = styled.div(css`
  height: 100vh;
  overflow: auto;
  max-width: 200px;
  background: #8fa68f;
  color: white;
  padding: 5px;
`)

export const User = styled.div(css`
  color: black;
  font-size: 22px;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
  background: white;
`)
