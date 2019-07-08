import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { last, isEmpty } from 'ramda'

import { Register } from '@/components/Register'
import { Chat } from '@/components/Chat'

const socket = io()

export const Lounge = () => {
  const [history, setHistory] = useState([])
  const [userName, setUserName] = useState('')

  useEffect(() => {
    socket.on('message', receiveMessage)
  }, [])

  const receiveMessage = data => {
    setHistory(prevHistory => {
      const displayUser = isEmpty(prevHistory)
      || last(prevHistory).userName != data.userName

      return [
        ...prevHistory,
        {
          ...data,
          id: Date.now(),
          displayUser,
        },
      ]
    })
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
