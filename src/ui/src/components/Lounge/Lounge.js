import React, { useState, useEffect } from 'react'
import { last, isEmpty } from 'ramda'
import io from 'socket.io-client'

import { Chat } from '@/components/Chat'
import { Message } from '@/components/Message'
import { Register } from '@/components/Register'
import { Notice, NoticeAlert } from '@/components/Message/MessageStyled'

const socket = io()

export const Lounge = () => {
  const [history, setHistory] = useState([])
  const [usersOnline, setUsersOnline] = useState([])
  const [registration, setRegistration] = useState({
    auth: false,
    error: '',
  })

  useEffect(() => {
    socket.on('message', receiveMessage)
    socket.on('userEnter', notifyUserEnter)
    socket.on('userLeave', notifyUserLeave)
    socket.emit('retrieveUsersOnline', setUsersOnline)
  }, [])

  const receiveMessage = data => {
    setHistory(prevHistory => {
      const displayUser = isEmpty(prevHistory)
        || last(prevHistory).props.username != data.username

      return [
        ...prevHistory,
        <Message {...data} key={Date.now()} displayUser={displayUser} />,
      ]
    })
  }

  const notifyUserEnter = username => {
    socket.emit('retrieveUsersOnline', setUsersOnline)
    setHistory(prevHistory => ([
      ...prevHistory,
      <Notice key={Date.now()}>{`${username} entrou na sala!`}</Notice>,
    ]))
  }

  const notifyUserLeave = username => {
    socket.emit('retrieveUsersOnline', setUsersOnline)
    setHistory(prevHistory => ([
      ...prevHistory,
      <NoticeAlert key={Date.now()}>{`${username} saiu.`}</NoticeAlert>,
    ]))
  }

  const register = name => {
    socket.emit('register', name, setRegistration)
  }

  const send = message => {
    socket.emit('message', message)
  }

  return registration.auth
    ? (
      <Chat history={history} onSend={send} usersOnline={usersOnline} />
    )
    : (
      <Register onSend={register} error={registration.error} />
    )
}
