import React from 'react'
import io from 'socket.io-client'
import { Chat } from '@/components/Chat/Chat'

const socket = io()
const userName = 'dayvan'
const users = ['dayvan', 'bern', 'rit']

export const App = () => (
  <div>
    <div>Head</div>
    <main>
      <Chat userName='dayvan' users={users} />
    </main>
  </div>
)
