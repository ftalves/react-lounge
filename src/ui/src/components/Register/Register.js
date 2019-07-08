import React, { useRef } from 'react'

import { RegisterWrapper, Input } from '@/components/Register/RegisterStyled'

export const Register = ({
  onSend,
}) => {
  const input = useRef(null)

  return (
    <RegisterWrapper>
      <p>Quem é você?</p>
      <Input
        ref={input}
        onKeyPress={e => e.key == 'Enter' ? onSend(input.current.value) : null}
      />
    </RegisterWrapper>
  )
}
