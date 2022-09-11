import React from 'react'
import Message from './Message'

const ChatView = ({messages}) => {
  return (
    messages.map(mess => <Message msg={mess}/>)
  )
}

export default ChatView