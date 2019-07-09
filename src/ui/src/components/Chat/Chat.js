import React, { useRef, useEffect } from 'react'

import {
  Chat as ChatWrapper,
  MessageArea,
  TextArea,
  Input,
} from '@/components/Chat/ChatStyled'

export const Chat = ({
  onSend,
  history,
}) => {
  const inputRef = useRef()
  const messageAreaRef = useRef()

  useEffect(() => {
    messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight
  })

  const send = () => {
    onSend(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <ChatWrapper>
      <MessageArea ref={messageAreaRef}>{history}</MessageArea>
      <TextArea>
        <Input
          ref={inputRef}
          onKeyPress={e => e.key == 'Enter' ? send() : null}
        />
      </TextArea>
    </ChatWrapper>
  )
}
