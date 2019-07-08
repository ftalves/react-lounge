import React, { useRef } from 'react'

import { MessagesWrapper } from '@/components/Message/MessagesWrapper'
import { MessageArea, TextArea, Input } from '@/components/Chat/ChatStyled'

export const Chat = ({
  onSend,
  history,
}) => {
  const input = useRef()

  const send = () => {
    onSend(input.current.value)
    input.current.value = ''
  }

  return (
    <>
      <MessagesWrapper history={history} />
      <TextArea>
        <Input ref={input} onKeyPress={e => e.key == 'Enter' ? send() : null} />
      </TextArea>
    </>
  )
}
