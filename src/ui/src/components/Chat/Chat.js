import React, { useState, useEffect } from 'react'
import { last, isEmpty } from 'ramda'
import io from 'socket.io-client'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { MessageBox } from '@/components/MessageBox'

const socket = io()

const MessageArea = styled.div(css`
  overflow: auto;
  margin-bottom: 10px;
  background: #eee;
  border: 13px ridge rgba(0,0,0,0.61);
  border-radius: 19px;
  height: 80vh;
  @media only screen and (max-height: 400px) {
    height: 60vh;
  }
`)

const TextArea = styled.div(css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch
  postition: fixed;
  bottom: 15px;
  height: 50px;
`)

const Input = styled.input(css`
  width: 80%;
`)

export const Chat = ({
  users,
  userName,
}) => {
  const [history, setHistory] = useState([])
  const [currentMsg, setCurrentMsg] = useState('')

  useEffect(() => {
    socket.on('msg', addMsg)
  }, [])

  const addMsg = msg => {
    setHistory(prevHistory => {
      const displayUser = isEmpty(prevHistory) || last(prevHistory).userName != userName
      // console.log(displayUser);
      return [
        ...prevHistory,
        {
          id: Date.now(),
          userName,
          displayUser,
          isSent: false,
          content: msg,
        },
      ]
    })
  }

  const send = () => {
    setCurrentMsg('')
    socket.emit('msg', currentMsg)
  }

  return (
    <>
      <MessageArea>
        <MessageBox history={history} />
      </MessageArea>
      <TextArea>
        <Input
          value={currentMsg}
          onChange={e => setCurrentMsg(e.target.value)}
          onKeyPress={e => e.key == 'Enter' ? send() : null}
        />
        <button onClick={send}> >> </button>
      </TextArea>
    </>
  )
}
