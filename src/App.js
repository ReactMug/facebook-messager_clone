import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
  },
}));

function App() {
  const classes = useStyles()
  const [input, setInput] = useState()
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')
  useEffect(() => {
    db.collection('messages')
       .orderBy('timeStamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
    })
  }, [])
  useEffect(() => {
    setUsername(prompt('Please Enter your name'))
  }, [])
  const sendMessages = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      username: username,
      message: input,
      timeStamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }
  return (
    <div className="App">
      <img className='App__img' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c526.png' alt=''>
      
      </img>
      <p>Goood Morining@ {username}</p>
      <form  className={`${classes.root} ${'App__form'}`} noValidate autoComplete="off" >
        <FormControl>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"
            value={input} onChange={event => setInput(event.target.value)} />
          <Button  disabled={!input} variant="contained" color="primary" disableElevation
            type='submit' onClick={sendMessages}
          > Send Message </Button>
        </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(
          ({id,message}) => (
            <Message key={id} username={username} message={message}/>
          )
        )
      }
      </FlipMove>
    </div>
  );
}

export default App;
