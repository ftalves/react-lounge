import React, { useState } from 'react'
import { MessageBox } from '@/components/MessageBox'
import { Room } from '@/components/Room'

const send = () => {

}

export const Chat = ({
  userName,
}) => {
  const [history, sethistory] = useState([])
  // const [count, setCount] = useState(0)
  console.log(history);
  return (
    <div>
      <div>
        <MessageBox history={history} />
        <Room />
      </div>
      <div>
        <input />
        <button>Send</button>
      </div>
    </div>
  )
}
