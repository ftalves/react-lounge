import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Wrapper = styled.div(css`
  display: inline-block;
  padding: 30px;
  background: #ddd;
  box-shadow: 0px 1px 5px 0px #aaa;
  &:hover {
    background: #ccc;
  }
`)

export const App = () => (
  <Wrapper>Olá! This works nicely :)</Wrapper>
)
