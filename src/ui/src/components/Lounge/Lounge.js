import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { last, isEmpty } from 'ramda'

import { Register } from '@/components/Register'
import { Message } from '@/components/Message'
import { Notice } from '@/components/Message/MessageStyled'
import { Chat } from '@/components/Chat'

const socket = io()

export const Lounge = () => {
  const [history, setHistory] = useState([])
  const [userName, setUserName] = useState('')

  useEffect(() => {
    socket.on('message', receiveMessage)
    socket.on('userEnter', notifyUserEnter)
  }, [])

  const receiveMessage = data => {
    setHistory(prevHistory => {
      const displayUser = isEmpty(prevHistory)
      || last(prevHistory).props.userName != data.userName

      return [
        ...prevHistory,
        <Message {...data} key={Date.now()} displayUser={displayUser} />,
      ]
    })
  }

  const notifyUserEnter = userName => {
    setHistory(prevHistory => ([
      ...prevHistory,
      <Notice key={Date.now()}>{`${userName} entrou na sala!`}</Notice>,
    ]))
  }

  const register = name => {
    setUserName(name)
    socket.emit('register', name)
  }

  const send = message => {
    socket.emit('message', message)
  }

  return userName
    ? (
      <Chat history={history} onSend={send} />
    )
    : (
      <Register onSend={register} />
    )
}
