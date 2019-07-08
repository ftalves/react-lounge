import React from 'react'

import { UserWrapper, ContentWrapper } from '@/components/Message/MessageStyled'

export const Message = React.memo(({
  message,
  userName,
  displayUser,
}) => (
  <>
    {displayUser
      ? <UserWrapper>{`${userName}`}</UserWrapper>
      : null
    }
    <ContentWrapper>{`${message}`}</ContentWrapper>
  </>
))
