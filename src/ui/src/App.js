import React from 'react'

// import { css } from '@emotion/core'
import { Chat } from '@/components/Chat/Chat'
// const io = require("socket.io-client")
// // console.log(io);
// // const socket = io('http://localhost')
// console.log(io);
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
