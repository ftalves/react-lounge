import React, { useEffect } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Wrapper = styled.div(css`
  display: block;
  width: 100%;
  background: #eee;
`)

export const Message = React.memo(({
  isSent,
  content,
  userName,
}) => (
  <Wrapper>{`${userName}: ${content}`}</Wrapper>
))
