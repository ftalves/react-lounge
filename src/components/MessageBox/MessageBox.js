import React from 'react'
import { map } from 'ramda'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Message } from '@/components/Message'

const Wrapper = styled.div(css`
  width: 70%;
  height: 400px;
  display: inline-block;
  border: 1px solid black;
`)

export const MessageBox = ({
  history,
}) => (
  <Wrapper>
    {map(msg => (
      <Message {...msg} key={msg.id} />
    ), history)}
  </Wrapper>
)
