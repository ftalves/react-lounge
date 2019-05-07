import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Wrapper = styled.div(css`
  display: block;
  background: #eee;
`)

export const Message = () => (
  <Wrapper>This is a message</Wrapper>
)
