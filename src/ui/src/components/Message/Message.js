import React from 'react'

import {
  User,
  Message as MessageWrapper,
} from '@/components/Message/MessageStyled'

export const Message = React.memo(({
  message,
  username,
  displayUser,
}) => (
  <>
    {displayUser
      ? <User>{`${username}`}</User>
      : null
    }
    <MessageWrapper>{`${message}`}</MessageWrapper>
  </>
))
