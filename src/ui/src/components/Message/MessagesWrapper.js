import React, { useRef, useEffect } from 'react'
import { map } from 'ramda'

import { Message } from '@/components/Message'
import { MessagesWrapper as Wrapper } from '@/components/Message/MessageStyled'

export const MessagesWrapper = ({
  history,
}) => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  })

  return (
    <Wrapper ref={ref}>
      {map(msg => (
        <Message {...msg} key={msg.id} />
      ), history)}
    </Wrapper>
  )
}
