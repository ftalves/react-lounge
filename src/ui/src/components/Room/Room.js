import React from 'react'
import { map } from 'ramda'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Wrapper = styled.div(css`
  width: 20%;
  height: 400px;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
`)

export const Room = ({
  users,
}) => (
  <Wrapper>{map(user => <div key={user}>{user}</div>, users)}</Wrapper>
)
