import React from 'react'
import { map } from 'ramda'

import { Message } from '@/components/Message'
import { MessagesWrapper as Wrapper } from '@/components/Message/MessageStyled'

export const MessagesWrapper = ({
  history,
}) => (
  <Wrapper>
    {map(msg => (
      <Message {...msg} key={msg.id} />
    ), history)}
  </Wrapper>
)
