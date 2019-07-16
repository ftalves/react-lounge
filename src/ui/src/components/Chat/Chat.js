import React, { useRef, useEffect } from 'react'

import { Room } from '@/components/Room'
import {
  Chat as ChatWrapper,
  MessageArea,
  TextArea,
  Input,
} from '@/components/Chat/ChatStyled'

export const Chat = ({
  onSend,
  history,
  usersOnline,
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
      <Room usersOnline={usersOnline} />
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
