/* eslint-disable react/prop-types */
import React from 'react';
import s from './Messages.module.css';
import DialogList from "./DIalogList/DialogList";
import Chat from "./Chat/Chat";

const Messages = (props) => {
    return <div className={s.messagesWrapper}>
        <DialogList dialogData={props.dialogData}/>
        <Chat messageData={props.messageData}/>
    </div>

}

export default Messages;