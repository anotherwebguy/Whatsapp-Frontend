import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react'
import './Chat.css';
import axios from '../axios'

function Chat({messages}) {
  const [input, setInput] = useState("")
  
  const sendMessage = async (e)=>{
    e.preventDefault();
    await axios.post('/messages/new',{
      message: input,
      name: 'test',
      timestamp: 'Just now',
      received: true
    })
    setInput('')
  }

  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar></Avatar>
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map(message => (
          <p className={`chat__message ${message.received && 'chat__reciever'}`}>
          <span className='chat__name'>{message.name}</span>
          {message.message}
          <span className='chat__timestamp'>{message.timestamp}</span>
        </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon></InsertEmoticon>
        <form>
          <input value={input} onChange={e=> setInput(e.target.value)}
          placeholder='Type a message'
          type='text'
          >
          </input>
          <button type="submit" onClick={sendMessage}>Send a Message</button>
        </form>
        <Mic></Mic>
      </div>
    </div>
  )
}

export default Chat
