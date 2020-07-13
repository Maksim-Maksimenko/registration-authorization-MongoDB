import React from 'react'
import Сhannel from './ channel'
import Dialogue from './ dialogue'
import Massage from './inputMassage'
import './ chatWindow.scss'

const ChatWindow = () => {
  return (
    <div className="container-chat">
      <Сhannel />
      <div className="container-window-channel">
        <Dialogue />
        <Massage />
      </div>
    </div>
  )
}

ChatWindow.propTypes = {}

export default React.memo(ChatWindow)
