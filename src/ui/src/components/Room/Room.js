import React, { useState } from 'react'
import { map } from 'ramda'

import { Wrapper, Button, User, UserList } from '@/components/Room/RoomStyled'

export const Room = ({
  usersOnline,
}) => {
  const [hidden, setHidden] = useState(false)

  return (
    <Wrapper>
      <Button onClick={() => setHidden(!hidden)}>{hidden ? '+' : '-'}</Button>
      {hidden
        ? null
        : (
          <UserList>
            Quem está aqui:
            {map(user => <User key={user}>{user}</User>, usersOnline)}
          </UserList>
        )
      }
    </Wrapper>
  )
}
