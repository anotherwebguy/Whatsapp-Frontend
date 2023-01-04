import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // run once when the app component loads
    axios.get('/messages/sync')
      .then(resp => {
        setMessages(resp.data)
      })
  }, [])

  useEffect(() => {
    // run once when the app component loads
    var pusher = new Pusher('313ff95b11840bfd45d4', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages);

  return (
    <div className = "app">
    <div className="app_body">
      <Sidebar/>
      <Chat messages={messages}/>
    </div>
    </div>
  );
}

export default App;
