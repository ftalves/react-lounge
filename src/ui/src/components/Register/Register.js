import React, { useRef } from 'react'

import {
  RegisterWrapper,
  Input,
  Alert,
} from '@/components/Register/RegisterStyled'

export const Register = ({
  onSend,
  error,
}) => {
  const input = useRef(null)

  return (
    <RegisterWrapper>
      <p>Quem é você?</p>
      <Input
        ref={input}
        onKeyPress={e => e.key == 'Enter' ? onSend(input.current.value) : null}
      />
      <Alert>{error}</Alert>
    </RegisterWrapper>
  )
}
