import React from 'react'

const Message = ({msg}) => {

  return (
    <div className='message'>
        {msg.from == 'fromSystem' ? <span className='msgBot'>Bot</span> : <span className='msgUser'>You</span>}
        <span className='msgDate'>{msg.date}</span>
        <br></br>
        <span className='msgg'>{msg.message}</span>
    </div>
  )
}

export default Message