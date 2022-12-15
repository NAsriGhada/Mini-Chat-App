import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Ghada</span>
        <div className="chatIcons">
          <i class="fa-solid fa-video"></i>
          <i class="fa-solid fa-user-plus"></i>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat