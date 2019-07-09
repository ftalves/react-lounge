import React from 'react'

import {
  User,
  Message as MessageWrapper,
} from '@/components/Message/MessageStyled'

export const Message = React.memo(({
  message,
  userName,
  displayUser,
}) => (
  <>
    {displayUser
      ? <User>{`${userName}`}</User>
      : null
    }
    <MessageWrapper>{`${message}`}</MessageWrapper>
  </>
))
