import React from 'react'
import { map } from 'ramda'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Message } from '@/components/Message'

const Wrapper = styled.div(css`
  display: flex;
  flex-direction: column;
  padding: 30px;
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
