import React, { forwardRef } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css'
const Message = forwardRef (({ username, message,},ref) => {
const  isUser = username === message.username
console.log(isUser)
    return (
          <div ref={ref} className={`Message ${isUser && 'Message__user'}`}>
          <Card className={isUser? "Message__guestCard":"Message__userCard"}>
          <CardContent>
          <Typography 
          variant="h5"
          color='white' 
          component="h2">
          {message.username}: {message.message}
        </Typography>
      </CardContent>
    </Card>
          </div>
          
    )
})

export default Message
