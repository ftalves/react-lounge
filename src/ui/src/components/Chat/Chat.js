import React, { useRef } from 'react'

import { MessagesWrapper } from '@/components/Message/MessagesWrapper'
import {
  Chat as ChatWrapper,
  TextArea,
  Input,
} from '@/components/Chat/ChatStyled'

export const Chat = ({
  onSend,
  history,
}) => {
  const inputRef = useRef()

  const send = () => {
    onSend(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <ChatWrapper>
      <MessagesWrapper history={history} />
      <TextArea>
        <Input
          ref={inputRef}
          onKeyPress={e => e.key == 'Enter' ? send() : null}
        />
      </TextArea>
    </ChatWrapper>
  )
}
