import React, { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Room } from '@/components/Room'
import { MessageBox } from '@/components/MessageBox'

export const Chat = ({
  users,
  userName,
}) => {
  const [history, setHistory] = useState([])
  const [currentMsg, setCurrentMsg] = useState('')

  const sendMsg = () => {
    setCurrentMsg('')
    setHistory(prevHistory => [
      ...prevHistory,
      {
        id: Date.now(),
        userName,
        isSent: false,
        content: currentMsg,
      },
    ])
  }

  return (
    <div>
      <div>
        <MessageBox history={history} />
        <Room users={users} />
      </div>
      <div>
        <input
          value={currentMsg}
          onChange={e => setCurrentMsg(e.target.value)}
          onKeyPress={e => e.key == 'Enter' ? sendMsg() : null}
        />
        <button onClick={sendMsg}>Send</button>
      </div>
    </div>
  )
}
