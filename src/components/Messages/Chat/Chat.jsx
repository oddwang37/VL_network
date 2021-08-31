/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import s from './Chat.module.css';
import ChatItem from "./ChatItem/ChatItem";
import MessageInput from "./MessageInput/MessageInput";

const Chat = (props) => {

    let messageElements = props.messageData.map((m) => {
       return <ChatItem message={m.message}/>
    })

    return <div className={s.chat}>
        {messageElements}
        <MessageInput />
    </div>

}

export default Chat;