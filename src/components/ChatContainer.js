import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatView from './ChatView';
const socket = io.connect('http://localhost:8080');


const ChatContainer = () => {
  socket.emit('openChat', {});

  const [ messages, setMessages ] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", {message: e.target.message.value});
    e.target.message.value = '';
  }

  useEffect(
    ()=>{
      socket.on("response", (data)=> setMessages(data))
    }
    ,[socket]
  );

  return (
    <div className='ChatContainer'>
        <div className='chatView'><ChatView messages={messages}/></div>
        <form className='chatForm' onSubmit={sendMessage}>
          <input type="text" name="message" id="message" required placeholder='Escribe tu mensaje' autoComplete='off'/>
          <input type="submit" id="submitChat" value="Send"/>
        </form>
        
    </div>
  )
  }

export default ChatContainer;