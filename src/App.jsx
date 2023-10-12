import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input } from '@mui/material';
import Message from './components/Message';
import Navbar from './components/Navbar';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import db from './firebase';
import { Toaster, toast } from 'sonner';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [flag, setFlag] = useState(false);

  console.log(messages);

  useEffect(() => {
    const fetchData = () => {
      const messagesCollection = collection(db, 'messages');
      const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
        const messageData = snapshot.docs.map((doc) => doc.data());
        messageData.sort((a, b) => a.Timestamp - b.Timestamp);
        setMessages(messageData);
      });
      return unsubscribe;
    };

    fetchData();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addDoc(collection(db, 'messages'), {
        username,
        message: input,
        Timestamp: new Date(),
      });
      setInput('');
    } else {
      toast.error('Please enter a valid message');
    }
  };

  const sendUsername = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      setFlag(true);
    } else {
      toast.error('Please enter a valid username');
    }
  };

  return (
    <>
     <Navbar/>
     <div className='App'>
      <Toaster richColors position='top-right'/>
      { !flag &&
      <form action="" className='username-div'>
          <FormControl className='input-div'>
            <h2 style={{marginBottom:"10px",textAlign:"center"}}>Enter username to continue to chat app</h2>
            <input placeholder='....' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
          </FormControl>
        <Button variant='contained' type='submit' onClick={sendUsername}>Submit</Button>
      </form>
      } 
      { flag &&
      <>
        <h2 className='intro'>Hello there {username} , welcome to chat app. Send this link to your friends to able to start chatting in realtime :)</h2>
        <form action="">
            <FormControl className='input-div'>
              <input placeholder='Enter a message' type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            </FormControl>
          <Button variant='contained' type='submit' onClick={sendMessage}>Send Message</Button>
        </form>
        <div className='messages'>
          {messages.map((message, index) => (
            <Message key={index} message={message} username={username} />
          ))}
        </div> 
      </>  
      }
     </div>
    </>
  );
}

export default App;
