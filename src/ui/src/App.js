import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Chat } from '@/components/Chat'

const userName = 'me'
const users = [userName, 'soy_boy', 'hot_surfer']

const AppWrapper = styled.div(css`
  font-size: 20px;
`)

export const App = () => (
  <div>
    <main>
      <AppWrapper>
        <Chat userName={userName} users={users} />
      </AppWrapper>
    </main>
  </div>
)
