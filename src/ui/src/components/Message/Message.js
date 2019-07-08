import React from 'react'

import { UserWrapper, ContentWrapper } from '@/components/Message/MessageStyled'

export const Message = React.memo(({
  content,
  userName,
  displayUser,
}) => (
  <>
    {displayUser
      ? <UserWrapper>{`${userName}`}</UserWrapper>
      : null
    }
    <ContentWrapper>{`${content}`}</ContentWrapper>
  </>
))
