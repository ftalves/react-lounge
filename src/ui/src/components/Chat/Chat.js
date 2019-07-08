import React, { useRef } from 'react'

import { MessageBox } from '@/components/Message/MessageBox'
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
      <MessageArea>
        <MessageBox history={history} />
      </MessageArea>
      <TextArea>
        <Input ref={input} onKeyPress={e => e.key == 'Enter' ? send() : null}
        />
      </TextArea>
    </>
  )
}
