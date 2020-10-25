import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../StateProvider'
import db from '../../firebase'
import firebase from 'firebase'
import MessageRow from './MessageRow'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import '../../ess/css/nav.css';

function Message() {
  const [{user}, dispatch] = useStateValue()
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    })
  }, [])

  const pushData = (mesge = message) =>{
    db.collection('messages').add({
      message: mesge,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      email: user.email,
    })
  }

  const handleSubmit = condition =>{
      pushData('ThIsIsthumBbB')
      setMessage('')
  }

  const handleFormSubmit = e =>{
    e.preventDefault()
    pushData()
    setMessage('')
  }

  return (
    <>
        <div className="messageBox__header">
          Messenger
        </div>

        <div className='messageBox__messages'>
          {messages.map((msg) =>{
            const CLASSNAME = msg.data.email === user.email ? 'sent' : 'received'
            return(
              <MessageRow 
                  key={msg.id} 
                  profilePic={msg.data.profilePic}
                  timestamp={msg.data.timestamp}
                  username={msg.data.username}
                  message={msg.data.message}
                  CLASSNAME={CLASSNAME}
              />
            )}
          )}
        </div>

        <div className='messageBox__inputMessage'>
          <form onSubmit={handleFormSubmit}>
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder=' Aa  ' />
            {message ? 
              <SendRoundedIcon className='messageBox__sticker' onClick={handleFormSubmit} /> 
              :
              <ThumbUpRoundedIcon className='messageBox__sticker' onClick={handleSubmit} />}
          </form>
        </div>

    </>
  );
}

export default Message