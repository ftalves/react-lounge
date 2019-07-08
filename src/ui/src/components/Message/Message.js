import React, { useEffect } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const UserWrapper = styled.div(css`
  background: #ffdbdb;
  font-weight: bold;
  margin: 3px;
  padding: 10px;
  border: 2px hidden rgba(0,0,0,0.61);
  border-radius: 19px;
  align-self: flex-start;
`)

const ContentWrapper = styled.div(css`
  margin: 3px 30px;
  padding: 10px;
  border: 2px hidden rgba(0,0,0,0.61);
  border-radius: 19px;
  background: #ddd;
  align-self: flex-start;
`)

export const Message = React.memo(({
  isSent,
  content,
  userName,
  displayUser,
}) => (
  <>
    { displayUser
        ? <UserWrapper>{`${userName}`}</UserWrapper>
        : null
    }
    <ContentWrapper>{`${content}`}</ContentWrapper>
  </>
))
